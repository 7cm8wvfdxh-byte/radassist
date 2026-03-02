import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ViewMode = "grid" | "list" | "ai" | "toolbox" | "report" | "compare" | "emergency" | "stats" | "anatomy";
export type ActiveModule = "brain" | "spine" | "liver" | "kidney" | "lung" | "breast" | "msk" | "gi" | "gyn";
export type ToolboxTab = 'ruler' | 'calc' | 'rads' | 'templates' | 'protocols' | 'signs' | 'ddx' | 'contrast' | 'artifacts' | 'glossary' | 'sequences';

interface AppState {
    searchQuery: string;
    setSearchQuery: (query: string) => void;

    favorites: string[];
    toggleFavorite: (id: string) => void;

    showFavoritesOnly: boolean;
    setShowFavoritesOnly: (show: boolean | ((prev: boolean) => boolean)) => void;

    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;

    activeModule: ActiveModule;
    setActiveModule: (module: ActiveModule) => void;

    toolboxTab: ToolboxTab;
    setToolboxTab: (tab: ToolboxTab) => void;

    searchGlobal: boolean;
    setSearchGlobal: (global: boolean | ((prev: boolean) => boolean)) => void;

    activeOrganFilter: string | null;
    setActiveOrganFilter: (filter: string | null) => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            searchQuery: '',
            setSearchQuery: (query) => set({ searchQuery: query }),

            favorites: [],
            toggleFavorite: (id) => set((state) => ({
                favorites: state.favorites.includes(id)
                    ? state.favorites.filter(fav => fav !== id)
                    : [...state.favorites, id]
            })),

            showFavoritesOnly: false,
            setShowFavoritesOnly: (showOrUpdater) => set((state) => ({
                showFavoritesOnly: typeof showOrUpdater === 'function' ? showOrUpdater(state.showFavoritesOnly) : showOrUpdater
            })),

            viewMode: 'grid',
            setViewMode: (mode) => set({ viewMode: mode }),

            activeModule: 'brain',
            setActiveModule: (module) => set({ activeModule: module }),

            toolboxTab: 'ruler',
            setToolboxTab: (tab) => set({ toolboxTab: tab }),

            searchGlobal: false,
            setSearchGlobal: (globalOrUpdater) => set((state) => ({
                searchGlobal: typeof globalOrUpdater === 'function' ? globalOrUpdater(state.searchGlobal) : globalOrUpdater
            })),

            activeOrganFilter: null,
            setActiveOrganFilter: (filter) => set({ activeOrganFilter: filter }),
        }),
        {
            name: 'radassist-storage',
            partialize: (state) => ({
                favorites: state.favorites,
                viewMode: state.viewMode,
                activeModule: state.activeModule,
            }),
        }
    )
);
