import React from 'react';
import HomePage from './homepage/HomePage.jsx';
import CareerDesk from './career-desk/CareerDesk.jsx';
import GermanyCareerGuide from './career-desk/GermanyCareerGuide.jsx';
import Courses from './courses/Courses.jsx';
import ContactUsPage from './contact/ContactUsPage.jsx';
import RegistrationPage from './registration/RegistrationPage.jsx';
import CollegeRegistration from './registration/CollegeRegistration.jsx';
import SignInPage from './auth/SignInPage.jsx';
import DestinationsPage from './destinations/DestinationsPage.jsx';
import GermanyPathway from './destinations/GermanyPathway.jsx';
import HospitalPartnerships from './hospitals/HospitalPartnerships.jsx';
import CountryPathway from './destinations/CountryPathway.jsx';
import PolicyPage from './legal/PolicyPage.jsx';

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/career-desk/germany' || path === '/career-desk/germany/nursing') return <GermanyCareerGuide />;
  if (path === '/career-desk') return <CareerDesk />;
  if (path === '/destinations/germany' || path === '/destination/germany') return <GermanyPathway />;
  if (path === '/destination/japan' || path === '/destinations/japan') return <CountryPathway country="japan" />;
  if (path === '/destination/uae' || path === '/destinations/uae') return <CountryPathway country="uae" />;
  if (path === '/destination/india' || path === '/destinations/india') return <CountryPathway country="india" />;
  if (path === '/destinations') return <DestinationsPage />;
  if (path === '/for-hospitals' || path === '/hospitals') return <HospitalPartnerships />;
  if (path === '/courses') return <Courses />;
  if (path === '/contact' || path === '/contact-us' || path === '/contact_us') return <ContactUsPage />;
  if (path === '/signin' || path === '/sign-in' || path === '/signin/nurse' || path === '/signin/hospital' || path === '/signin/college') return <SignInPage />;
  if (['/privacy-policy','/terms','/cookies','/disclaimer'].includes(path)) return <PolicyPage path={path} />;
  if (path === '/register/college') return <CollegeRegistration />;
  if (path === '/register' || path === '/register/nurse' || path === '/register/hospital') return <RegistrationPage />;
  return <HomePage />;
}
