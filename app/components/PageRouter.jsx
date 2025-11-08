export const PageRouter = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAnimating, setIsAnimating] = useState(false);

  const changePage = (page) => {
    if (page === currentPage) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsAnimating(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setPage={changePage} />
      <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {currentPage === 'home' && <HomePage setPage={changePage} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'academics' && <AcademicsPage />}
        {currentPage === 'admissions' && <AdmissionsPage />}
        {currentPage === 'research' && <ResearchPage />}
        {currentPage === 'leadership' && <LeadershipPage />}
        {currentPage === 'cisa' && <CISAPage />}
        {currentPage === 'events' && <EventsPage />}
        {currentPage === 'news' && <NewsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </div>
      <Footer setPage={changePage} />
    </div>
  );
};
