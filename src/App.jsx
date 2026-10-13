import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AuthModal from "./components/AuthModal";
import CreatorModal from "./components/CreatorModal";
import PortfolioViewerModal from "./components/PortfolioViewerModal";
import AiBriefBuilderModal from "./components/AiBriefBuilderModal";
import UploadWorkModal from "./components/UploadWorkModal";
import BrandDiscoverView from "./views/BrandDiscoverView";
import BrandBriefsView from "./views/BrandBriefsView";
import BrandVerificationView from "./views/BrandVerificationView";
import CreatorOverviewView from "./views/CreatorOverviewView";
import CreatorPortfolioView from "./views/CreatorPortfolioView";
import CreatorDeliveriesView from "./views/CreatorDeliveriesView";
import CreatorIncomingBriefsView from "./views/CreatorIncomingBriefsView";
import { INITIAL_CREATORS, INITIAL_BRIEFS, INITIAL_NOTIFICATIONS } from "./data/mockData";

export default function App() {
  // Current User State (Brand or Creator)
  const [user, setUser] = useState({
    role: "brand", // "brand" | "creator"
    name: "Acme Creative Studio",
    email: "creative@acmestudios.com",
    industry: "Lifestyle & DTC",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
  });

  // Active Tab State (adapts per role)
  const [brandTab, setBrandTab] = useState("discover"); // "discover" | "briefs" | "verification" | "overview"
  const [creatorTab, setCreatorTab] = useState("analytics"); // "analytics" | "portfolio" | "incoming" | "deliveries"

  // Data Stores
  const [creators, setCreators] = useState(INITIAL_CREATORS);
  const [briefs, setBriefs] = useState(INITIAL_BRIEFS);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContentType, setSelectedContentType] = useState("All");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations");
  const [selectedTool, setSelectedTool] = useState("All Tools");
  const [selectedBadge, setSelectedBadge] = useState("All Badges");
  const [selectedAspectRatio, setSelectedAspectRatio] = useState("All Ratios");

  // Modals
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [briefBuilderOpen, setBriefBuilderOpen] = useState(false);
  const [uploadWorkOpen, setUploadWorkOpen] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [activePortfolioItem, setActivePortfolioItem] = useState(null);
  const [activePortfolioCreator, setActivePortfolioCreator] = useState(null);

  // Role Switcher Handler
  const handleSwitchRole = (newRole) => {
    if (newRole === "creator") {
      setUser({
        role: "creator",
        name: "Elena Vance",
        handle: "@elenavance_ai",
        specialty: "AI Filmmaking",
        email: "elena@synthreel.studio",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
      });
      setCreatorTab("analytics");
    } else {
      setUser({
        role: "brand",
        name: "Acme Creative Studio",
        industry: "Lifestyle & DTC",
        email: "creative@acmestudios.com",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
      });
      setBrandTab("discover");
    }
  };

  // Auth Success Handler
  const handleAuthSuccess = (userData) => {
    setUser(userData);
    if (userData.role === "creator") {
      setCreatorTab("analytics");
    } else {
      setBrandTab("discover");
    }
  };

  // Primary CTA Handler based on current role
  const handleOpenPrimaryCta = () => {
    if (user.role === "brand") {
      setBriefBuilderOpen(true);
    } else {
      setUploadWorkOpen(true);
    }
  };

  // Publish Brief Handler
  const handlePublishBrief = (newBrief) => {
    setBriefs([newBrief, ...briefs]);
    setNotifications([
      {
        id: `notif-${Date.now()}`,
        title: "Brief Published to Marketplace",
        message: `Your campaign "${newBrief.title}" is now live and matching creators.`,
        time: "Just now",
        read: false,
        type: "brief"
      },
      ...notifications
    ]);
    if (user.role === "brand") {
      setBrandTab("briefs");
    }
  };

  // Upload Work Handler
  const handleUploadWork = (newItem) => {
    // Add to first creator (Elena Vance) or matching active creator
    const updated = creators.map((c) => {
      if (c.id === "creator-1" || c.name === user.name) {
        return {
          ...c,
          portfolioItems: [newItem, ...c.portfolioItems]
        };
      }
      return c;
    });
    setCreators(updated);
    setNotifications([
      {
        id: `notif-${Date.now()}`,
        title: "New Work Published",
        message: `"${newItem.title}" has been published with certified C2PA credentials.`,
        time: "Just now",
        read: false,
        type: "verification"
      },
      ...notifications
    ]);
  };

  // Direct Brief Action from a Creator Card/Modal
  const handleDirectBrief = (creator) => {
    setSelectedCreator(null);
    setBriefBuilderOpen(true);
  };

  // Reset Filters Action
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedContentType("All");
    setSelectedSpecialization("All Specializations");
    setSelectedTool("All Tools");
    setSelectedBadge("All Badges");
    setSelectedAspectRatio("All Ratios");
  };

  // Open Portfolio Item Viewer
  const handleOpenItem = (item, creator) => {
    setActivePortfolioItem(item);
    setActivePortfolioCreator(creator);
  };

  // Filtered Creators calculation
  const filteredCreators = useMemo(() => {
    return creators.filter((creator) => {
      // Search Query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = creator.name.toLowerCase().includes(q);
        const matchesHandle = creator.handle.toLowerCase().includes(q);
        const matchesTitle = creator.roleTitle.toLowerCase().includes(q);
        const matchesBio = creator.bio.toLowerCase().includes(q);
        const matchesTools = creator.tools.some((t) => t.toLowerCase().includes(q));
        const matchesSpec = creator.specializations.some((s) => s.toLowerCase().includes(q));
        const matchesClients = creator.sampleClients.some((c) => c.toLowerCase().includes(q));
        const matchesItems = creator.portfolioItems.some(
          (p) => p.title.toLowerCase().includes(q) || p.promptSummary.toLowerCase().includes(q)
        );

        if (!matchesName && !matchesHandle && !matchesTitle && !matchesBio && !matchesTools && !matchesSpec && !matchesClients && !matchesItems) {
          return false;
        }
      }

      // Content Type Filter
      if (selectedContentType !== "All") {
        const matchesPrimary = creator.contentType === selectedContentType;
        const matchesItems = creator.portfolioItems.some((item) => item.type === selectedContentType);
        if (!matchesPrimary && !matchesItems) return false;
      }

      // Specialization Filter
      if (selectedSpecialization !== "All Specializations") {
        if (!creator.specializations.includes(selectedSpecialization)) {
          return false;
        }
      }

      // Tools Filter
      if (selectedTool !== "All Tools") {
        if (!creator.tools.includes(selectedTool)) {
          return false;
        }
      }

      // Badge Filter
      if (selectedBadge !== "All Badges") {
        if (!creator.verifiedBadges.includes(selectedBadge)) {
          return false;
        }
      }

      // Aspect Ratio Filter
      if (selectedAspectRatio !== "All Ratios") {
        const matchesFeatured = creator.featuredReel.aspectRatio === selectedAspectRatio;
        const matchesItems = creator.portfolioItems.some((item) => item.aspectRatio === selectedAspectRatio);
        if (!matchesFeatured && !matchesItems) {
          return false;
        }
      }

      return true;
    });
  }, [
    creators,
    searchQuery,
    selectedContentType,
    selectedSpecialization,
    selectedTool,
    selectedBadge,
    selectedAspectRatio
  ]);

  // Mark all notifications read
  const handleMarkNotificationsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const isBrand = user.role === "brand";
  const activeTab = isBrand ? brandTab : creatorTab;
  const handleSelectTab = (tabId) => {
    if (isBrand) {
      setBrandTab(tabId);
    } else {
      setCreatorTab(tabId);
    }
  };

  // Creator's personal portfolio items (defaulting to creator-1's items)
  const currentCreatorPortfolio = useMemo(() => {
    const found = creators.find((c) => c.id === "creator-1" || c.name === user.name);
    return found ? found.portfolioItems : creators[0].portfolioItems;
  }, [creators, user.name]);

  return (
    <div className="min-h-screen bg-[#F4F6F4] text-[#1C201A] flex flex-col font-sans selection:bg-[#E9EFE2] selection:text-[#35441E]">
      {/* TOP NAVIGATION BAR */}
      <Navbar
        user={user}
        onSwitchRole={handleSwitchRole}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        notifications={notifications}
        onMarkNotificationsRead={handleMarkNotificationsRead}
        onOpenPrimaryCta={handleOpenPrimaryCta}
        onOpenAuthModal={() => setAuthModalOpen(true)}
      />

      {/* MAIN LAYOUT SHELL (STICKY SIDEBAR & MAIN CONTENT AREA) */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        {/* STICKY LEFT SIDEBAR */}
        <Sidebar
          user={user}
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          onSwitchRole={handleSwitchRole}
        />

        {/* MAIN DYNAMIC CONTENT PANE */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
          {/* BRAND ROLE VIEWS */}
          {isBrand && (
            <>
              {(brandTab === "discover" || brandTab === "overview") && (
                <BrandDiscoverView
                  creators={filteredCreators}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  selectedContentType={selectedContentType}
                  setSelectedContentType={setSelectedContentType}
                  selectedSpecialization={selectedSpecialization}
                  setSelectedSpecialization={setSelectedSpecialization}
                  selectedTool={selectedTool}
                  setSelectedTool={setSelectedTool}
                  selectedBadge={selectedBadge}
                  setSelectedBadge={setSelectedBadge}
                  selectedAspectRatio={selectedAspectRatio}
                  setSelectedAspectRatio={setSelectedAspectRatio}
                  onResetFilters={handleResetFilters}
                  totalAll={creators.length}
                  onSelectCreator={(c) => setSelectedCreator(c)}
                  onDirectBrief={handleDirectBrief}
                  onOpenItem={handleOpenItem}
                  onOpenBriefBuilder={() => setBriefBuilderOpen(true)}
                />
              )}

              {brandTab === "briefs" && (
                <BrandBriefsView
                  briefs={briefs}
                  onOpenBriefBuilder={() => setBriefBuilderOpen(true)}
                  onSelectBrief={(b) => alert(`Selected brief: ${b.title}`)}
                />
              )}

              {brandTab === "verification" && (
                <BrandVerificationView />
              )}
            </>
          )}

          {/* CREATOR ROLE VIEWS */}
          {!isBrand && (
            <>
              {creatorTab === "analytics" && (
                <CreatorOverviewView
                  user={user}
                  briefs={briefs}
                  onOpenUploadWork={() => setUploadWorkOpen(true)}
                  onSelectTab={handleSelectTab}
                />
              )}

              {creatorTab === "portfolio" && (
                <CreatorPortfolioView
                  user={user}
                  portfolioItems={currentCreatorPortfolio}
                  onOpenUploadWork={() => setUploadWorkOpen(true)}
                  onOpenItem={handleOpenItem}
                />
              )}

              {creatorTab === "incoming" && (
                <CreatorIncomingBriefsView
                  briefs={briefs}
                  user={user}
                />
              )}

              {creatorTab === "deliveries" && (
                <CreatorDeliveriesView />
              )}
            </>
          )}
        </main>
      </div>

      {/* MODALS */}
      {/* 1. AUTHENTICATION & ONBOARDING MODAL */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      {/* 2. DETAILED CREATOR PROFILE & PIPELINE MODAL */}
      <CreatorModal
        creator={selectedCreator}
        onClose={() => setSelectedCreator(null)}
        onDirectBrief={handleDirectBrief}
        onOpenItem={handleOpenItem}
      />

      {/* 3. FULLSCREEN REEL & MEDIA VIEWER */}
      <PortfolioViewerModal
        item={activePortfolioItem}
        creator={activePortfolioCreator}
        onClose={() => setActivePortfolioItem(null)}
        onUseAsTemplate={(item) => {
          setActivePortfolioItem(null);
          setBriefBuilderOpen(true);
        }}
      />

      {/* 4. AI-ASSISTED BRIEF BUILDER MODAL */}
      <AiBriefBuilderModal
        isOpen={briefBuilderOpen}
        onClose={() => setBriefBuilderOpen(false)}
        onPublishBrief={handlePublishBrief}
      />

      {/* 5. UPLOAD WORK MODAL (FOR CREATORS) */}
      <UploadWorkModal
        isOpen={uploadWorkOpen}
        onClose={() => setUploadWorkOpen(false)}
        onUpload={handleUploadWork}
      />
    </div>
  );
}
