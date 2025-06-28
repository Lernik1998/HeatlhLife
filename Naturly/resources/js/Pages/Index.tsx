import { Head, Link } from '@inertiajs/react';
import PublicNavBar from '@/Components/PublicNavBar'

export default function Welcome({ auth }: { auth: any }) {
    return (
        <>
            <Head title="Naturly - Tu guía de nutrición" />

            <div className="min-h-screen bg-gradient-to-b from-[#A0E7E5] to-[#B4F8C8]">
                {/* Header */}
                <PublicNavBar  auth={auth} />

                {/* Hero Section */}
                <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                            Transforma tu salud con <span className="text-[white]">Naturly</span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                            La herramienta definitiva para planificar tu dieta, contar calorías y alcanzar tus objetivos de salud de manera natural y sostenible.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link 
                                href="#" 
                                className="bg-[#FBE7C6] hover:bg-[#f5d8a7] text-gray-800 px-6 py-3 rounded-full font-medium text-center transition"
                            >
                                Comenzar Ahora
                            </Link>
                            <Link 
                                href="#" 
                                className="border-2 border-white hover:border-[#A0E7E5] text-white hover:text-[#A0E7E5] px-6 py-3 rounded-full font-medium text-center transition"
                            >
                                Ver Video
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img 
                            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                            alt="Comida saludable" 
                            className="rounded-lg shadow-xl w-full max-w-md"
                        />
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestras Herramientas</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-[#FBE7C6]/30 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                <div className="bg-[#A0E7E5] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Contador de Calorías</h3>
                                <p className="text-gray-600">
                                    Registra fácilmente lo que comes y obtén un desglose nutricional completo con nuestro contador inteligente.
                                </p>
                            </div>
                            
                            {/* Feature 2 */}
                            <div className="bg-[#B4F8C8]/30 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                <div className="bg-[#A0E7E5] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Planificación de Dietas</h3>
                                <p className="text-gray-600">
                                    Planes personalizados según tus objetivos: pérdida de peso, ganancia muscular o mantenimiento.
                                </p>
                            </div>
                            
                            {/* Feature 3 */}
                            <div className="bg-[#FBE7C6]/30 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                <div className="bg-[#A0E7E5] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Seguimiento de Progreso</h3>
                                <p className="text-gray-600">
                                    Visualiza tu evolución con gráficos detallados y estadísticas que te motivarán a seguir adelante.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Popular Diets Section */}
                <section className="py-16 bg-[#A0E7E5]/10">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Dietas Populares</h2>
                        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                            Descubre los planes alimenticios más efectivos respaldados por nutricionistas.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Diet 1 */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                                <img 
                                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                                    alt="Dieta Mediterránea" 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Mediterránea</h3>
                                    <p className="text-gray-600 mb-4">
                                        Rica en vegetales, frutas, pescado y aceite de oliva. Ideal para la salud cardiovascular.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-[#A0E7E5] font-medium">1,500-2,000 kcal</span>
                                        <Link href="#" className="text-[#A0E7E5] hover:text-[#7fd1cf] font-medium">Ver detalles →</Link>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Diet 2 */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                                <img 
                                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                                    alt="Dieta Keto" 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Cetogénica (Keto)</h3>
                                    <p className="text-gray-600 mb-4">
                                        Baja en carbohidratos, alta en grasas saludables. Efectiva para pérdida de peso rápida.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-[#A0E7E5] font-medium">1,200-1,800 kcal</span>
                                        <Link href="#" className="text-[#A0E7E5] hover:text-[#7fd1cf] font-medium">Ver detalles →</Link>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Diet 3 */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                                <img 
                                    src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                                    alt="Dieta Vegana" 
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Vegana</h3>
                                    <p className="text-gray-600 mb-4">
                                        100% basada en plantas. Perfecta para quienes buscan una alimentación ética y sostenible.
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-[#A0E7E5] font-medium">1,600-2,200 kcal</span>
                                        <Link href="#" className="text-[#A0E7E5] hover:text-[#7fd1cf] font-medium">Ver detalles →</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link 
                                href="#" 
                                className="inline-block bg-[#FBE7C6] hover:bg-[#f5d8a7] text-gray-800 px-6 py-3 rounded-full font-medium transition"
                            >
                                Ver todas las dietas
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Historias de Éxito</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Testimonial 1 */}
                            <div className="bg-[#B4F8C8]/20 p-6 rounded-xl">
                                <div className="flex items-center mb-4">
                                    <img 
                                        src="https://randomuser.me/api/portraits/women/32.jpg" 
                                        alt="Usuario" 
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">María González</h4>
                                        <p className="text-sm text-gray-600">Perdió 12 kg en 3 meses</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">
                                    "Naturly me ayudó a entender por fin cómo alimentarme correctamente. El contador de calorías es increíblemente fácil de usar y los planes de comidas son deliciosos."
                                </p>
                                <div className="flex mt-4 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Testimonial 2 */}
                            <div className="bg-[#FBE7C6]/20 p-6 rounded-xl">
                                <div className="flex items-center mb-4">
                                    <img 
                                        src="https://randomuser.me/api/portraits/men/45.jpg" 
                                        alt="Usuario" 
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Carlos Martínez</h4>
                                        <p className="text-sm text-gray-600">Ganó 5 kg de músculo</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">
                                    "Como atleta, necesitaba una herramienta precisa para controlar mi ingesta proteica. Naturly superó mis expectativas con sus funciones avanzadas."
                                </p>
                                <div className="flex mt-4 text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Testimonial 3 */}
                            <div className="bg-[#A0E7E5]/20 p-6 rounded-xl">
                                <div className="flex items-center mb-4">
                                    <img 
                                        src="https://randomuser.me/api/portraits/women/68.jpg" 
                                        alt="Usuario" 
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-800">Laura Sánchez</h4>
                                        <p className="text-sm text-gray-600">Mantiene su peso ideal</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">
                                    "Después de años de dietas yo-yo, encontré en Naturly la manera sostenible de comer bien sin obsesionarme. ¡La mejor inversión en mi salud!"
                                </p>
                                <div className="flex mt-4 text-yellow-400">
                                    {[...Array(4)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-[#A0E7E5] to-[#B4F8C8]">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para transformar tu alimentación?</h2>
                        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                            Únete a miles de personas que ya están logrando sus objetivos con Naturly.
                        </p>
                        <Link 
                            href="#" 
                            className="inline-block bg-white hover:bg-gray-100 text-[#A0E7E5] px-8 py-4 rounded-full font-bold text-lg shadow-lg transition transform hover:scale-105"
                        >
                            Comenzar Gratis
                        </Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <svg className="w-8 h-8 text-[#A0E7E5]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="text-2xl font-bold">Naturly</span>
                                </div>
                                <p className="text-gray-400">
                                    Tu compañero de nutrición para una vida más saludable y feliz.
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
                                <ul className="space-y-2">
                                    <li><Link href="#" className="text-gray-400 hover:text-white transition">Inicio</Link></li>
                                    <li><Link href="#" className="text-gray-400 hover:text-white transition">Dietas</Link></li>
                                    <li><Link href="#" className="text-gray-400 hover:text-white transition">Calculadora</Link></li>
                                    <li><Link href="#" className="text-gray-400 hover:text-white transition">Recetas</Link></li>
                                    <li><Link href="#" className="text-gray-400 hover:text-white transition">Blog</Link></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                                <ul className="space-y-2">
                                    <li><Link href="#" className="text-gray-400 hover:text-white transition">Términos</Link></li>
                                    <li><Link href="#" className="text-gray-400 hover:text-white transition">Privacidad</Link></li>
                                    <li><Link href="#" className="text-gray-400 hover:text-white transition">Cookies</Link></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                                <ul className="space-y-2">
                                    <li className="text-gray-400">info@naturly.com</li>
                                    <li className="text-gray-400">+34 123 456 789</li>
                                    <li className="flex space-x-4 mt-4">
                                        <Link href="#" className="text-gray-400 hover:text-white transition">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                            </svg>
                                        </Link>
                                        <Link href="#" className="text-gray-400 hover:text-white transition">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                                            </svg>
                                        </Link>
                                        <Link href="#" className="text-gray-400 hover:text-white transition">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                            <p>© 2023 Naturly. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}