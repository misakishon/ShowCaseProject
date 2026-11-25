import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/css/app.css';
import { InertiaProvider } from './inertia-shim.jsx';

import Home from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/Home';
import BookingStep1 from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/BookingStep1';
import BookingStep2 from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/BookingStep2';
import BookingStep3 from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/BookingStep3';
import BookingStep4 from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/BookingStep4';
import BookingSuccess from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/BookingSuccess';
import AdminDashboard from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/admin/dashboard';
import AdminAppointments from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/admin/Appointments';
import AdminBarbers from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/admin/Barbers';
import AdminHairstyles from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/admin/Hairstyles';
import AdminUsers from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/admin/Users';
import AdminTimeSlots from 'C:/TrainAi/BEZ_HAIR_STUDIO/resources/js/Pages/admin/index';

const INITIAL_BARBERS = [
    {
        id: 1,
        full_name: 'Marco Villanueva',
        specialty: 'Master Fade & Razor Work',
        rating: 4.9,
        total_reviews: 128,
        experience_years: 8,
        profile_image: '/uploads/barbers/artisan-barber-studio.png',
        is_available: 1,
        bio: 'Specializes in precision skin fades, textured crops, and razor-sharp studio lineups.',
        introduction: 'Over 8 years crafting tailored fades and calm grooming sessions.',
        certifications: ['Licensed Master Barber', 'Advanced Fade Specialist', 'Precision Scissor Craft'],
        specialties: ['Fade & Taper', 'Razor Lineup', 'Textured Crop'],
        default_price: 250,
    },
    {
        id: 2,
        full_name: 'Kenji Bautista',
        specialty: 'Textured Crops & Taper Cuts',
        rating: 4.8,
        total_reviews: 94,
        experience_years: 6,
        profile_image: '/uploads/barbers/defaultBarber.jpg',
        is_available: 1,
        bio: 'Known for effortless modern crops, temple tapers, and natural volume sculpting.',
        introduction: 'Focused on clean silhouettes that grow out gracefully.',
        certifications: ['Modern Scissor Styling', 'Asian Texture Specialist'],
        specialties: ['Textured Crop', 'Temple Taper', 'Natural Flow'],
        default_price: 250,
    },
    {
        id: 3,
        full_name: 'Dante Ramos',
        specialty: 'Classic Grooming & Beard Sculpt',
        rating: 5.0,
        total_reviews: 162,
        experience_years: 10,
        profile_image: '/uploads/barbers/artisan-barber-studio.png',
        is_available: 1,
        bio: 'Veteran craftsman dedicated to hot-towel straight-razor shaves and executive cuts.',
        introduction: 'A decade of classic barbershop precision with modern comfort.',
        certifications: ['Straight Razor Mastery', 'Luxury Beard Architecture'],
        specialties: ['Hot Towel Shave', 'Executive Cut', 'Beard Sculpt'],
        default_price: 300,
    },
];

const INITIAL_HAIRSTYLES = [
    { id: 1, name: 'Fade Cut', description: 'Crisp skin fade blended cleanly into textured top layers.', price: 250, duration_minutes: 45, category: 'Fade', image_path: '/uploads/hairstyle/fade-cut-studio.png', booking_count: 184, is_active: 1, created_at: '2026-06-01' },
    { id: 2, name: 'Taper Cut', description: 'Refined temple and nape taper with natural scissor flow.', price: 250, duration_minutes: 40, category: 'Classic', image_path: '/uploads/hairstyle/taper-cut-studio.png', booking_count: 148, is_active: 1, created_at: '2026-06-05' },
    { id: 3, name: 'High Fade', description: 'Sharp high-contrast fade tailored for bold, clean edges.', price: 280, duration_minutes: 45, category: 'Fade', image_path: '/uploads/hairstyle/high-fade-studio.png', booking_count: 132, is_active: 1, created_at: '2026-06-12' },
    { id: 4, name: 'Curly Fade', description: 'Volume-preserving curl definition paired with a seamless drop fade.', price: 300, duration_minutes: 50, category: 'Modern', image_path: '/uploads/hairstyle/curly-fade-studio.png', booking_count: 119, is_active: 1, created_at: '2026-07-02' },
    { id: 5, name: 'Buzz Cut', description: 'Precision uniform clipper cut with razor hairline detailing.', price: 200, duration_minutes: 30, category: 'Classic', image_path: '/uploads/hairstyle/buzz-cut-studio.png', booking_count: 96, is_active: 1, created_at: '2026-07-15' },
];

const INITIAL_APPOINTMENTS = [
    { id: 101, client_name: 'Rafael Mendoza', first_name: 'Rafael', last_name: 'Mendoza', booking_full_name: 'Rafael Mendoza', email: 'rafael.m@gmail.com', booking_email: 'rafael.m@gmail.com', phone: '0917-554-1920', barber_name: 'Marco Villanueva', hairstyle_name: 'Fade Cut', appointment_date: '2026-11-22', appointment_time: '10:00:00', status: 'confirmed', payment_method: 'gcash', payment_status: 'paid', total_price: 250, confirmation_number: 'BEZ-4081' },
    { id: 102, client_name: 'Miguel Torres', first_name: 'Miguel', last_name: 'Torres', booking_full_name: 'Miguel Torres', email: 'miguel.t@gmail.com', booking_email: 'miguel.t@gmail.com', phone: '0918-442-8812', barber_name: 'Dante Ramos', hairstyle_name: 'Curly Fade', appointment_date: '2026-11-22', appointment_time: '11:00:00', status: 'confirmed', payment_method: 'gcash', payment_status: 'paid', total_price: 300, confirmation_number: 'BEZ-4082' },
    { id: 103, client_name: 'Carlo Aquino', first_name: 'Carlo', last_name: 'Aquino', booking_full_name: 'Carlo Aquino', email: 'carlo.a@gmail.com', booking_email: 'carlo.a@gmail.com', phone: '0927-331-6709', barber_name: 'Kenji Bautista', hairstyle_name: 'Taper Cut', appointment_date: '2026-11-22', appointment_time: '14:00:00', status: 'pending', payment_method: 'gcash', payment_status: 'pending', total_price: 250, confirmation_number: 'BEZ-4083' },
    { id: 104, client_name: 'Paolo Reyes', first_name: 'Paolo', last_name: 'Reyes', booking_full_name: 'Paolo Reyes', email: 'paolo.r@gmail.com', booking_email: 'paolo.r@gmail.com', phone: '0915-772-3314', barber_name: 'Marco Villanueva', hairstyle_name: 'High Fade', appointment_date: '2026-11-22', appointment_time: '15:30:00', status: 'confirmed', payment_method: 'cash', payment_status: 'paid', total_price: 280, confirmation_number: 'BEZ-4084' },
];

const INITIAL_USERS = [
    { id: 1, first_name: 'Rafael', last_name: 'Mendoza', email: 'rafael.m@gmail.com', phone: '0917-554-1920', role: 'customer', created_at: '2026-08-14', total_bookings: 6, completed_bookings: 6 },
    { id: 2, first_name: 'Miguel', last_name: 'Torres', email: 'miguel.t@gmail.com', phone: '0918-442-8812', role: 'customer', created_at: '2026-09-02', total_bookings: 4, completed_bookings: 4 },
    { id: 3, first_name: 'Carlo', last_name: 'Aquino', email: 'carlo.a@gmail.com', phone: '0927-331-6709', role: 'customer', created_at: '2026-10-11', total_bookings: 2, completed_bookings: 1 },
];

// Ziggy-compatible route() helper for BEZ Hair Studio
const ROUTE_MAP = {
    'booking.step1': '/booking/step-1',
    'booking.step2': '/booking/step-2',
    'booking.step3': '/booking/step-3',
    'booking.step4': '/booking/step-4',
    'booking.success': '/booking/success',
    'booking.get-slots': '/booking/get-slots',
    'booking.payment.gcash': '/booking/payment/gcash',
    'booking.send-otp': '/booking/send-otp',
    'booking.verify-otp': '/booking/verify-otp',
    'contact.send': '/contact',
    'admin.login': '/admin/dashboard',
    'admin.logout': '/',
    'admin.dashboard': '/admin/dashboard',
    'admin.appointments': '/admin/appointments',
    'admin.appointments.confirm-payment': '/admin/appointments/confirm-payment',
    'admin.appointments.cancel': '/admin/appointments/cancel',
    'admin.users': '/admin/users',
    'admin.barbers': '/admin/barbers',
    'admin.hairstyles': '/admin/hairstyles',
    'admin.time-slots.index': '/admin/time-slots',
    'admin.time-slots.store': '/admin/time-slots',
};

window.route = function (name, params) {
    if (!name) return { current: () => false };
    if (name === 'admin.barbers.update') return `/admin/barbers/${params}`;
    if (name === 'admin.barbers.toggle-status') return `/admin/barbers/${params}/toggle-status`;
    if (name === 'admin.time-slots.toggle') return `/admin/time-slots/${params}/toggle`;
    if (name === 'admin.time-slots.destroy') return `/admin/time-slots/${params}`;
    if (name === 'admin.users.show' || name === 'admin.users.update' || name === 'admin.users.destroy') return `/admin/users/${params}`;
    return ROUTE_MAP[name] || '/';
};

// Normalize initial iframe path (supports ?route=/admin/dashboard deep links)
const requestedRoute = new URLSearchParams(window.location.search).get('route');
if (requestedRoute && requestedRoute.startsWith('/')) {
    window.history.replaceState({}, '', requestedRoute);
} else if (window.location.pathname.startsWith('/apps/bez-hair-studio')) {
    window.history.replaceState({}, '', '/');
}

function BezStandaloneApp() {
    const [url, setUrl] = useState(() => window.location.pathname + window.location.search);
    const [barbers, setBarbers] = useState(INITIAL_BARBERS);
    const [hairstyles, setHairstyles] = useState(INITIAL_HAIRSTYLES);
    const [appointments, setAppointments] = useState(INITIAL_APPOINTMENTS);
    const [blockedSlots, setBlockedSlots] = useState(['11:30', '13:00']);
    const [flash, setFlash] = useState({});
    const [bookingDraft, setBookingDraft] = useState({
        barberId: 1,
        hairstyleId: 1,
        bookingDate: '2026-11-22',
        bookingTime: '13:30',
        fullName: 'Alex Santos',
        email: 'alex.santos@gmail.com',
        phone: '0917-123-4567',
        paymentMethod: 'gcash',
    });
    const [lastConfirmed, setLastConfirmed] = useState({
        id: 105,
        confirmation_number: 'BEZ-4099',
        full_name: 'Alex Santos',
        email: 'alex.santos@gmail.com',
        phone: '0917-123-4567',
        booking_date: '2026-11-22',
        booking_time: '13:30',
        total_price: 250,
        payment_method: 'gcash',
        hairstyle_name: 'Fade Cut',
        barber_name: 'Marco Villanueva',
        status: 'confirmed',
    });

    // Global fetch interceptor for BEZ studio APIs (barbers, slots, OTP, PayMongo QR PH, contact)
    useEffect(() => {
        const nativeFetch = window.fetch.bind(window);
        window.fetch = async function (input, init = {}) {
            const raw = typeof input === 'string' ? input : input?.url || '';
            const u = new URL(raw, window.location.origin);
            const p = u.pathname;
            const json = (data, status = 200) =>
                new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

            if (p === '/api/barbers') return json(barbers);
            if (p === '/api/testimonials') {
                return json([
                    { id: 1, rating: 5, comment: 'Cleanest skin fade in Ilocos Norte. Zero wait time with QR PH booking.', customer_name: 'Rafael M.', barber_name: 'Marco Villanueva', created_at: '2026-11-18' },
                    { id: 2, rating: 5, comment: 'Calm studio atmosphere and super consistent taper cuts.', customer_name: 'Miguel T.', barber_name: 'Dante Ramos', created_at: '2026-11-15' },
                ]);
            }
            if (p.startsWith('/api/barbers/') && p.endsWith('/rate')) {
                return json({ success: true, message: 'Thank you for rating!' });
            }
            if (p === '/booking/get-slots') {
                return json({
                    success: true,
                    booked_times: ['10:00', '14:00'],
                    unavailable_times: blockedSlots,
                    disabled_times: Array.from(new Set(['10:00', '14:00', ...blockedSlots])),
                });
            }
            if (p === '/booking/send-otp') {
                return json({ success: true, message: 'Demo OTP ready — enter any 6 digits (e.g. 123456) to verify.' });
            }
            if (p === '/booking/verify-otp') {
                return json({ success: true, verified: true, message: 'Email verified!' });
            }
            if (p === '/booking/payment/gcash') {
                const svgQr = 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220"><rect width="220" height="220" fill="#fff"/><rect x="18" y="18" width="56" height="56" fill="#000"/><rect x="28" y="28" width="36" height="36" fill="#fff"/><rect x="38" y="38" width="16" height="16" fill="#000"/><rect x="146" y="18" width="56" height="56" fill="#000"/><rect x="156" y="28" width="36" height="36" fill="#fff"/><rect x="166" y="38" width="16" height="16" fill="#000"/><rect x="18" y="146" width="56" height="56" fill="#000"/><rect x="28" y="156" width="36" height="36" fill="#fff"/><rect x="38" y="166" width="16" height="16" fill="#000"/><rect x="94" y="94" width="32" height="32" fill="#000"/><rect x="140" y="110" width="20" height="20" fill="#000"/><rect x="108" y="156" width="24" height="24" fill="#000"/><rect x="156" y="156" width="40" height="40" fill="#000"/></svg>');
                return json({ success: true, qr_code: svgQr, payment_intent_id: 'pi_demo_qrph_101', status: 'awaiting_next_action' });
            }
            if (p === '/booking/payment/gcash/status') {
                return json({ success: true, status: 'paid', redirect: '/booking/success' });
            }
            if (p === '/contact') {
                return json({ success: true, message: 'Message received by BEZ Hair Studio!' });
            }
            if (p.startsWith('/admin/time-slots')) {
                return json({ success: true, slots: [] });
            }
            return nativeFetch(input, init);
        };
        return () => {
            window.fetch = nativeFetch;
        };
    }, [barbers, blockedSlots]);

    const navigate = useCallback((href, options = {}) => {
        const parsed = new URL(href, window.location.origin);
        const barberIdParam = parsed.searchParams.get('barber_id');
        const hairstyleIdParam = parsed.searchParams.get('hairstyle_id');
        const dateParam = parsed.searchParams.get('date');
        const timeParam = parsed.searchParams.get('time');

        if (barberIdParam || hairstyleIdParam || dateParam || timeParam) {
            setBookingDraft((prev) => ({
                ...prev,
                ...(barberIdParam ? { barberId: Number(barberIdParam) } : {}),
                ...(hairstyleIdParam ? { hairstyleId: Number(hairstyleIdParam) } : {}),
                ...(dateParam ? { bookingDate: dateParam } : {}),
                ...(timeParam ? { bookingTime: timeParam } : {}),
            }));
        }

        if (options.replace) window.history.replaceState({}, '', href);
        else window.history.pushState({}, '', href);
        setUrl(href);
        if (!options.preserveScroll) window.scrollTo(0, 0);
    }, []);

    const submitPost = useCallback((targetUrl, data = {}, options = {}) => {
        const clean = targetUrl.split('?')[0];
        if (clean === '/booking/step-3') {
            setBookingDraft((prev) => ({
                ...prev,
                barberId: Number(data.barber_id || prev.barberId),
                hairstyleId: Number(data.hairstyle_id || prev.hairstyleId),
                bookingDate: data.date || data.booking_date || prev.bookingDate,
                bookingTime: data.time || data.booking_time || prev.bookingTime,
            }));
            navigate('/booking/step-3');
        } else if (clean === '/booking/step-4') {
            setBookingDraft((prev) => ({
                ...prev,
                fullName: data.full_name || prev.fullName,
                email: data.email || prev.email,
                phone: data.phone || prev.phone,
                paymentMethod: data.payment_method || prev.paymentMethod,
            }));
            if (data.confirm_booking || data.payment_method === 'cash' || data.payment_method === 'gcash') {
                const chosenStyle = hairstyles.find((h) => h.id === bookingDraft.hairstyleId) || hairstyles[0];
                const chosenBarber = barbers.find((b) => b.id === bookingDraft.barberId) || barbers[0];
                const created = {
                    id: Date.now(),
                    confirmation_number: `BEZ-${Math.floor(4100 + Math.random() * 890)}`,
                    full_name: data.full_name || bookingDraft.fullName,
                    email: data.email || bookingDraft.email,
                    phone: data.phone || bookingDraft.phone,
                    booking_date: bookingDraft.bookingDate,
                    booking_time: bookingDraft.bookingTime,
                    total_price: chosenStyle.price,
                    payment_method: data.payment_method || 'gcash',
                    hairstyle_name: chosenStyle.name,
                    barber_name: chosenBarber.full_name,
                    status: 'confirmed',
                };
                setLastConfirmed(created);
                setAppointments((prev) => [
                    {
                        id: created.id,
                        client_name: created.full_name,
                        first_name: created.full_name.split(' ')[0],
                        last_name: created.full_name.split(' ').slice(1).join(' '),
                        booking_full_name: created.full_name,
                        email: created.email,
                        booking_email: created.email,
                        phone: created.phone,
                        barber_name: created.barber_name,
                        hairstyle_name: created.hairstyle_name,
                        appointment_date: created.booking_date,
                        appointment_time: `${created.booking_time}:00`,
                        status: 'confirmed',
                        payment_method: created.payment_method,
                        payment_status: 'paid',
                        total_price: created.total_price,
                        confirmation_number: created.confirmation_number,
                    },
                    ...prev,
                ]);
                if (clean === '/booking/step-4' && (data.confirm_booking || data.final_submit)) {
                    navigate('/booking/success');
                } else {
                    navigate('/booking/step-4');
                }
            } else {
                navigate('/booking/step-4');
            }
        } else if (clean === '/admin/appointments/confirm-payment') {
            setAppointments((prev) => prev.map((a) => (a.id === Number(data.booking_id || data.id) ? { ...a, status: 'confirmed', payment_status: 'paid' } : a)));
            setFlash({ success: 'Appointment payment confirmed.' });
        } else if (clean === '/admin/appointments/cancel') {
            setAppointments((prev) => prev.map((a) => (a.id === Number(data.booking_id || data.id) ? { ...a, status: 'cancelled' } : a)));
            setFlash({ success: 'Appointment cancelled.' });
        } else if (clean === '/contact') {
            setFlash({ success: 'Message sent to BEZ Hair Studio!' });
        }
        if (typeof options.onSuccess === 'function') options.onSuccess();
        if (typeof options.onFinish === 'function') options.onFinish();
    }, [barbers, bookingDraft, hairstyles, navigate]);

    useEffect(() => {
        const onPop = () => setUrl(window.location.pathname + window.location.search);
        window.addEventListener('popstate', onPop);
        return () => window.removeEventListener('popstate', onPop);
    }, []);

    const pathname = (url.split('?')[0].split('#')[0] || '/').replace(/\/+$/, '') || '/';
    const selectedBarber = barbers.find((b) => b.id === bookingDraft.barberId) || barbers[0];
    const selectedHairstyle = hairstyles.find((h) => h.id === bookingDraft.hairstyleId) || hairstyles[0];

    const groupedHairstyles = useMemo(() => {
        return hairstyles.reduce((acc, h) => {
            const cat = h.category || 'Other';
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(h);
            return acc;
        }, {});
    }, [hairstyles]);

    const monthlyData = {
        1: { bookings: 18, revenue: 4650 },
        2: { bookings: 22, revenue: 5800 },
        3: { bookings: 26, revenue: 6900 },
        4: { bookings: 24, revenue: 6400 },
        5: { bookings: 31, revenue: 8250 },
        6: { bookings: 35, revenue: 9400 },
        7: { bookings: 33, revenue: 8900 },
        8: { bookings: 38, revenue: 10200 },
        9: { bookings: 42, revenue: 11400 },
        10: { bookings: 46, revenue: 12650 },
        11: { bookings: 51, revenue: 14100 },
        12: { bookings: 54, revenue: 15200 },
    };

    const routeView = useMemo(() => {
        if (pathname === '/booking/step-1') {
            return { component: 'BookingStep1', el: <BookingStep1 barbers={barbers} /> };
        }
        if (pathname === '/booking/step-2') {
            return {
                component: 'BookingStep2',
                el: <BookingStep2 barber={selectedBarber} barberId={selectedBarber.id} hairstyles={hairstyles} groupedHairstyles={groupedHairstyles} />,
            };
        }
        if (pathname === '/booking/step-3') {
            return {
                component: 'BookingStep3',
                el: (
                    <BookingStep3
                        hairstyle={selectedHairstyle}
                        barber={selectedBarber}
                        barberId={selectedBarber.id}
                        hairstyleId={selectedHairstyle.id}
                        bookingDate={bookingDraft.bookingDate}
                        bookingTime={bookingDraft.bookingTime}
                        displayPrice={selectedHairstyle.price}
                    />
                ),
            };
        }
        if (pathname === '/booking/step-4') {
            return {
                component: 'BookingStep4',
                el: (
                    <BookingStep4
                        hairstyle={selectedHairstyle}
                        barber={selectedBarber}
                        barberId={selectedBarber.id}
                        hairstyleId={selectedHairstyle.id}
                        bookingDate={bookingDraft.bookingDate}
                        bookingTime={bookingDraft.bookingTime}
                        paymentMethod={bookingDraft.paymentMethod}
                        fullName={bookingDraft.fullName}
                        email={bookingDraft.email}
                        phone={bookingDraft.phone}
                    />
                ),
            };
        }
        if (pathname === '/booking/success') {
            return { component: 'BookingSuccess', el: <BookingSuccess booking={lastConfirmed} /> };
        }
        if (pathname === '/admin' || pathname === '/admin/login' || pathname === '/admin/dashboard') {
            return {
                component: 'admin/dashboard',
                el: (
                    <AdminDashboard
                        range="all"
                        barbers={barbers}
                        totalBookings={appointments.filter((a) => a.status === 'confirmed').length + 416}
                        totalRevenue={113850}
                        totalCustomers={284}
                        totalBarbers={barbers.length}
                        topBarbers={barbers.map((b, i) => ({ full_name: b.full_name, appointment_count: 142 - i * 24 }))}
                        recentAppointments={appointments}
                        monthlyData={monthlyData}
                        revenueByCategory={{ Fade: 54200, Classic: 34800, Modern: 24850 }}
                        bookingsByDay={[42, 48, 51, 56, 74, 92, 57]}
                        revenueChange={14.6}
                        bookingsChange={11.2}
                        customersChange={8.4}
                        avgChange={4.1}
                        currentMonthRevenue={14100}
                        avgPerVisit={274}
                        liveActivity={appointments.slice(0, 4).map((a) => ({
                            message: `${a.client_name} booked ${a.hairstyle_name} with ${a.barber_name}`,
                            timeAgo: 'Just now',
                            color: a.status === 'confirmed' ? 'bg-emerald-500' : 'bg-amber-500',
                            status: a.status,
                        }))}
                    />
                ),
            };
        }
        if (pathname === '/admin/appointments') {
            return { component: 'admin/Appointments', el: <AdminAppointments appointments={appointments} statusFilter="all" dateFilter="" /> };
        }
        if (pathname === '/admin/barbers') {
            const adminBarber = {
                ...barbers[0],
                certifications: Array.isArray(barbers[0].certifications)
                    ? barbers[0].certifications.join(', ')
                    : barbers[0].certifications,
            };
            return { component: 'admin/Barbers', el: <AdminBarbers barber={adminBarber} /> };
        }
        if (pathname === '/admin/hairstyles') {
            return { component: 'admin/Hairstyles', el: <AdminHairstyles hairstyles={hairstyles} /> };
        }
        if (pathname === '/admin/users') {
            return {
                component: 'admin/Users',
                el: (
                    <AdminUsers
                        users={{ data: INITIAL_USERS, current_page: 1, last_page: 1, per_page: 10, total: INITIAL_USERS.length }}
                        totalUsers={INITIAL_USERS.length}
                        totalBookings={12}
                        activeUsers={3}
                        search=""
                        roleFilter="all"
                    />
                ),
            };
        }
        if (pathname === '/admin/time-slots') {
            return { component: 'admin/index', el: <AdminTimeSlots barbers={barbers} timeSlots={[]} /> };
        }
        return { component: 'Home', el: <Home popularHairstyles={hairstyles} barbers={barbers} /> };
    }, [appointments, barbers, bookingDraft, groupedHairstyles, hairstyles, lastConfirmed, pathname, selectedBarber, selectedHairstyle]);

    return (
        <InertiaProvider
            value={{
                url,
                component: routeView.component,
                props: {
                    auth: { user: { id: 1, name: 'Studio Admin', email: 'admin@bezhair.studio', role: 'admin' } },
                    flash,
                },
                navigate,
                submitPost,
            }}
        >
            {routeView.el}
        </InertiaProvider>
    );
}

createRoot(document.getElementById('app')).render(<BezStandaloneApp />);
