import Header from "@/app/elements/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../elements/app-sidebar";
import { Footer } from "../elements/footer";

export default function AboutUs() {
    return (
        <div className="bg-jet-black min-h-screen text-white">
            <SidebarProvider defaultOpen={false}>
                <AppSidebar />
                <div className="flex-1 flex flex-col">
                    {/* Header */}
                    <Header />

                    {/* Main Content */}
                    <div className="p-10">
                    <h1 className="text-4xl font-bold text-red-600 mb-6 font-alfa">About LoomCine</h1>
                    <p className="mb-4 text-lg leading-relaxed font-poppins">
                    <strong>LoomCine</strong> is your ultimate online destination for booking movie tickets with ease and convenience.
                    Designed for movie lovers, LoomCine lets you discover what’s now showing, what’s coming soon, and reserve seats—all from one seamless platform.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-400 font-poppins">🎬 What We Do</h2>
                    <p className="mb-4">
                    We simplify your movie-going experience by providing:
                    </p>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>Real-time movie schedules and listings</li>
                    <li>Seat selection and instant ticket booking</li>
                    <li>Digital tickets — no printing needed</li>
                    <li>Exclusive member rewards and early access</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-400 font-poppins">🍿 Why LoomCine?</h2>
                    <p className="mb-4">
                    Our platform is built with the user in mind—fast, responsive, and easy to use across all devices. Whether you’re planning a night out or catching the latest blockbuster, LoomCine helps you secure your seats in just a few clicks.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-400 font-poppins">🌟 Our Mission</h2>
                    <p className="mb-4">
                    To make movie ticket booking stress-free, transparent, and enjoyable for everyone. We believe in bringing people together through cinema, and we aim to enhance your experience before you even step into the theater.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-2 text-gray-400 font-poppins">📍 Get in Touch</h2>
                    <p className="mb-2">Have feedback or need support?</p>
                    <p>Email us at <span className="underline text-red-500">support@LoomCine.com</span></p>
                </div>
                    {/* Footer */}
                    <Footer />
                </div>
            </SidebarProvider>
        </div>
    );
}
