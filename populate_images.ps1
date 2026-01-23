# Populate Images Script
# Parses all *pathologies.ts files in src/data and populates the images
# with a source placeholder image.

$sourceImage = "public\placeholder_source.png"
$dataDir = "src\data"
$publicDir = "public"

if (-not (Test-Path $sourceImage)) {
    Write-Error "Source image not found: $sourceImage"
    exit 1
}

# Find all pathology files
$files = Get-ChildItem -Path $dataDir -Filter "*pathologies.ts"

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    $content = Get-Content $file.FullName

    # Regex to find urls inside gallery: { "url": "/images/..." }
    # Matches: "url": "/images/something.png"
    $matches = [regex]::Matches($content, '"url":\s*"(?<path>/images/[^"]+)"')

    foreach ($match in $matches) {
        $relativePath = $match.Groups["path"].Value
        # Remove leading slash for Path joining
        $relativePathClean = $relativePath.TrimStart("/")
        
        $fullDestPath = Join-Path $publicDir $relativePathClean
        $destDir = Split-Path $fullDestPath -Parent

        # Create directory if it doesn't exist
        if (-not (Test-Path $destDir)) {
            New-Item -ItemType Directory -Path $destDir -Force | Out-Null
            Write-Host "Created dir: $destDir"
        }

        # Copy if file doesn't exist (to preserve any real images if run again)
        # OR force overwrite if we want to reset. Let's interpret 'populate'.
        # For now, only if not exists to be safe, BUT since I just added them, none exist.
        if (-not (Test-Path $fullDestPath)) {
            Copy-Item $sourceImage -Destination $fullDestPath
            Write-Host "Created image: $relativePath"
        } else {
            Write-Host "Image exists (skipping): $relativePath"
        }
    }
}

Write-Host "Done!"
