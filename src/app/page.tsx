import { CheckCircle, Globe, MapPin, Phone, Mail, Truck, Ship, Package, Users, Clock, Award, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">Sony Logistics Centre</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-sm font-medium hover:text-orange-600 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Services
            </Link>
            <Link href="#journey" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Our Journey
            </Link>
            <Link href="#clients" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Clients
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-orange-400">Your Trusted Partner in </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Comprehensive clearing & forwarding, transport, and logistics solutions connecting your business to the
              world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Sony Logistics Centre</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leading the way in comprehensive logistics solutions with decades of experience and a commitment to
                excellence in every shipment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h3>
                <p className="text-gray-600 mb-6">
                  Sony Logistics Centre is a trusted name in the logistics and supply chain industry, delivering
                  excellence for over 25 years. Established with a vision to simplify and optimize freight movement,
                  with expertise in customs clearance, warehousing, and transportation. Our client-first philosophy,
                  backed by decades of hands-on industry experience, sets us apart in ensuring timely, cost-effective,
                  and reliable solutions
                </p>
                <p className="text-gray-600 mb-8"></p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/logos/mainlogo.png"
                  alt="Sony Logistics Centre warehouse"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive logistics solutions tailored to meet your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Ship className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Clearing & Forwarding</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Expert customs clearance and freight forwarding services for seamless international trade
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Customs Documentation
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Import/Export Clearance
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Duty Optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Transport Services</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Reliable road, rail, and multimodal transport solutions across all major routes
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Road Transport
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Rail Freight
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Last Mile Delivery
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl">Logistics Solutions</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">End-to-end supply chain management and warehousing solutions</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Warehousing
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Inventory Management
                    </li>
                    <li className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Supply Chain Optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Sony Logistics Centre</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference with our commitment to excellence and customer satisfaction
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
                <p className="text-gray-600">100% on-time delivery rate with real-time tracking</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                <p className="text-gray-600">25+ years of experience in logistics and forwarding</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
                <p className="text-gray-600">Extensive network covering 50+ countries worldwide</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Support</h3>
                <p className="text-gray-600">24/7 customer support with dedicated account managers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Major Clients</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading companies across various industries for their logistics needs
              </p>
            </div>

            {/* Major Clients List */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-12"> Major Clients</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Replace these with your actual client logos */}
                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-20 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg border">
                      <Image
                        src="/logos/ceat.png"
                        alt="Client 1 Logo"
                        width={128}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Ceat Tyres</h4>
                    <p className="text-sm text-gray-600">Manufacturing Industry</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-20 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg border">
                      <Image
                        src="/logos/apar.png"
                        alt="Client 2 Logo"
                        width={128}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">APAR</h4>
                    <p className="text-sm text-gray-600">Import</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-20 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg border">
                      <Image
                        src="/logos/monier.jpg"
                        alt="Client 3 Logo"
                        width={128}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">BMI-Monier</h4>
                    <p className="text-sm text-gray-600">Roofing</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-20 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg border">
                      <Image
                        src="/logos/talbros.png"
                        alt="Client 4 Logo"
                        width={128}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Talbros </h4>
                    <p className="text-sm text-gray-600">Automotive Components</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-20 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg border">
                      <Image
                        src="/logos/shibam.png"
                        alt="Client 5 Logo"
                        width={128}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Shibam Ventures</h4>
                    <p className="text-sm text-gray-600">Building</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-20 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg border">
                      <Image
                        src="/logos/packwell.png"
                        alt="Client 6 Logo"
                        width={128}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Packwell</h4>
                    <p className="text-sm text-gray-600">Gaskets</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-20 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg border">
                      <Image
                        src="/logos/Noble.jpg"
                        alt="Client 7 Logo"
                        width={128}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Noble</h4>
                    <p className="text-sm text-gray-600">Protective Systems</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-32 h-20 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg border">
                      <Image
                        src="/logos/sg.png"
                        alt="Client 8 Logo"
                        width={128}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">SG Corporation</h4>
                    <p className="text-sm text-gray-600">Chemicals</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Client Statistics */}
            <div className="bg-white rounded-lg p-8 shadow-lg mb-16">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">150+</div>
                  <div className="text-gray-600">Total Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">25+</div>
                  <div className="text-gray-600">Major Corporate Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                  <div className="text-gray-600">Industries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-gray-600">Client Retention Rate</div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to streamline your logistics? Contact us today for a customized solution
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Head Office</h4>
                      <p className="text-gray-600">
                        205/206, Second Floor
                        <br />
                        78 Business District, 
                        <br />
                        Near Bhandup Station,
                        <br />
                        Bhandup, Mumbai 400078.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 9819250266</p>
                      <p className="text-gray-600">+91 7400478266</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">gajananexpimp@gmail.com</p>
                      <p className="text-gray-600">granthbsony@gmail.com.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Business Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-orange-600 font-medium">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Select a service</option>
                      <option>Clearing & Forwarding</option>
                      <option>Transport Services</option>
                      <option>Logistics Solutions</option>
                      <option>All Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    ></textarea>
                  </div>

                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Truck className="h-8 w-8 text-orange-600" />
                  <span className="text-xl font-bold">Sony Logistics Centre</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Your trusted partner in global logistics, clearing & forwarding, and transport solutions.
                </p>
                <div className="flex space-x-4">
                  <Badge variant="secondary" className="bg-orange-600 hover:bg-orange-700">
                    ISO Certified
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-600 hover:bg-orange-700">
                    24/7 Support
                  </Badge>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Clearing & Forwarding
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Transport Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Logistics Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Warehousing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Supply Chain Management
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="#about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#journey" className="hover:text-white transition-colors">
                      Our Journey
                    </Link>
                  </li>
                  <li>
                    <Link href="#clients" className="hover:text-white transition-colors">
                      Clients
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-gray-400">
                  <p className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    +91 9819250266
                  </p>
                  <p className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    gajananexpimp@gmail.com
                  </p>
                  <p className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-1" />
                    205/206, 2nd Floor, 
                    <br />
                    78 Business Park , Bhandup
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Sony Logistics Centre. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
