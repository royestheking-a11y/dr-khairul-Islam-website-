import { createBrowserRouter } from 'react-router';
import { Layout } from '@/app/components/Layout';
import Home from '@/app/pages/Home';
import About from '@/app/pages/About';
import Services from '@/app/pages/Services';
import Chamber from '@/app/pages/Chamber';
import Fees from '@/app/pages/Fees';
import Appointment from '@/app/pages/Appointment';
import OnlineConsultation from '@/app/pages/OnlineConsultation';
import FAQ from '@/app/pages/FAQ';
import NotFound from '@/app/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'chamber', Component: Chamber },
      { path: 'fees', Component: Fees },
      { path: 'appointment', Component: Appointment },
      { path: 'online-consultation', Component: OnlineConsultation },
      { path: 'faq', Component: FAQ },
      { path: '*', Component: NotFound },
    ],
  },
]);
