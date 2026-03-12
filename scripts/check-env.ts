/**
 * Environment validation script
 * Run before build: npx tsx scripts/check-env.ts
 */

const REQUIRED_VARS = [
    { key: 'NEXT_PUBLIC_SUPABASE_URL', description: 'Supabase project URL' },
    { key: 'NEXT_PUBLIC_SUPABASE_ANON_KEY', description: 'Supabase anonymous key' },
];

const OPTIONAL_VARS = [
    { key: 'ADMIN_EMAIL', description: 'Admin notification email' },
    { key: 'RESEND_API_KEY', description: 'Resend email service API key' },
    { key: 'INTERNAL_API_SECRET', description: 'Internal API route secret' },
];

let hasErrors = false;

console.log('\n🔍 Checking environment variables...\n');

for (const { key, description } of REQUIRED_VARS) {
    if (!process.env[key]) {
        console.error(`  ❌ ${key} — ${description} (REQUIRED)`);
        hasErrors = true;
    } else {
        console.log(`  ✅ ${key}`);
    }
}

console.log('');

for (const { key, description } of OPTIONAL_VARS) {
    if (!process.env[key]) {
        console.warn(`  ⚠️  ${key} — ${description} (optional, not set)`);
    } else {
        console.log(`  ✅ ${key}`);
    }
}

console.log('');

if (hasErrors) {
    console.error('❌ Missing required environment variables. Copy .env.example to .env.local and fill in the values.\n');
    process.exit(1);
} else {
    console.log('✅ All required environment variables are set.\n');
}
