import React, { useState, useEffect, useRef } from 'react';
import { Camera, Rocket, Satellite, Globe, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

const SpaceWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const services = [
    {
      icon: <Rocket size={40} />,
      title: 'Falcon & Starship',
      description: 'The world\'s most advanced orbital launch vehicles. Falcon 9 is a reusable, two-stage rocket designed to reliably and safely transport people and payloads into Earth orbit and beyond. Starship is the fully reusable transportation system designed to carry crew and cargo to Earth orbit, the Moon, Mars, and beyond. Standing 394 feet tall, it\'s the most powerful launch vehicle ever developed, capable of carrying 100+ metric tons to orbit.'
    },
    {
      icon: <Satellite size={40} />,
      title: 'Dragon Spacecraft',
      description: 'Under an agreement with NASA, Aman SpaceX is flying astronauts to the International Space Station. Dragon made history in 2020 when it became the first commercial spacecraft to take humans to orbit. Dragon is also capable of carrying cargo and returning significant amounts of cargo to Earth—a capability not available since the retirement of the Space Shuttle.'
    },
    {
      icon: <Globe size={40} />,
      title: 'Starlink Internet',
      description: 'Starlink is the world\'s first and largest satellite constellation using a low Earth orbit to deliver broadband internet capable of supporting streaming, online gaming, video calls and more. Leveraging advanced satellites and user hardware coupled with our deep experience with spacecraft and on-orbit operations, Starlink delivers high-speed, low-latency internet to locations where access has been unreliable or completely unavailable.'
    },
    {
      icon: <Camera size={40} />,
      title: 'Mars Transportation',
      description: 'Building a self-sustaining city on Mars will require affordable delivery of both people and cargo. Starship is designed to deliver payloads to Earth orbit, the Moon, Mars, and beyond. The system is fully reusable, with the capability to fly and land rapidly. We\'re developing propellant production on Mars using in-situ resources, making round-trip missions economically viable and establishing the foundation for a permanent Martian presence.'
    }
  ];

  const renderHome = () => (
    <div className="page-content">
      <div className="hero-section">
        <div className="stars-layer"></div>
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <h1 className="hero-title">
            <span className="title-line">Making Life</span>
            <span className="title-line highlight">Multiplanetary</span>
          </h1>
          <p className="hero-subtitle">Revolutionizing space technology to enable people to live on other planets</p>
          <button className="cta-button" onClick={() => setCurrentPage('services')}>
            Explore Our Missions
          </button>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </div>

      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2 className="section-title">The Future is Multiplanetary</h2>
              <p>Aman SpaceX designs, manufactures, and launches advanced rockets and spacecraft. The company was founded to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</p><br/>
              <p>We believe humanity must become a multiplanetary species to ensure long-term survival. That's why we're building Starship, the world's most powerful launch vehicle ever developed, capable of carrying humans to the Moon, Mars, and beyond. Through full and rapid reusability, we're making space accessible to all.</p><br/>
              <p>Our integrated approach to manufacturing allows us to build rockets from the ground up. By controlling the entire supply chain and iterating rapidly, we've reduced launch costs by orders of magnitude while increasing reliability. Every launch, every landing, every test brings us closer to making life multiplanetary.</p>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">165+</div>
                <div className="stat-label">Launches This Year</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">600+</div>
                <div className="stat-label">Total Missions</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">450+</div>
                <div className="stat-label">Booster Landings</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6M+</div>
                <div className="stat-label">Starlink Users</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container" style={{ marginTop: '6rem' }}>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Aman SpaceX?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Rapid Reusability</h3>
              <p>Our rockets land themselves and fly again. Falcon 9 first stages have been reused over 20 times, with less than 24 hours between flights. Full reusability is the key to dramatically reducing the cost of access to space.</p>
            </div>
            <div className="feature-card">
              <h3>Vertical Integration</h3>
              <p>We design and manufacture 85% of our components in-house, from Raptor engines to Dragon capsules. This control over the supply chain enables rapid iteration and breakthrough innovations at unprecedented speed.</p>
            </div>
            <div className="feature-card">
              <h3>Mars-Focused Mission</h3>
              <p>Everything we do is in service of making life multiplanetary. Starship will carry crew and cargo to the Moon, Mars, and beyond, establishing a self-sustaining city on Mars and backing up the light of consciousness.</p>
            </div>
            <div className="feature-card">
              <h3>Proven Reliability</h3>
              <p>We've completed over 600 missions with NASA, commercial clients, and government agencies. Our Dragon spacecraft is the only private vehicle certified to carry astronauts to and from the International Space Station.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="page-content">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">Pioneering the future of space exploration</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2 className="section-title">Our Mission</h2>
              <p className="large-text">To revolutionize space technology, with the ultimate goal of enabling people to live on other planets.</p>
              <p>Founded in 2015, Aman SpaceX was created with a singular purpose: make life multiplanetary. What began as an ambitious vision to reduce space transportation costs and enable the colonization of Mars has evolved into the world's leading space launch provider.</p>
              
              <p>Our founder recognized that the biggest obstacle to space exploration wasn't technology—it was cost. Traditional rockets were expendable, discarded after a single use. We pioneered reusability, proving that rockets could land themselves and fly again. Today, our Falcon 9 is the world's first orbital class reusable rocket, with first stages flying more than 20 times.</p>

              <p>We don't just launch satellites. We're building the transportation infrastructure for a multiplanetary future. From delivering crew and cargo to the International Space Station, to deploying our Starlink constellation that provides internet to over 6 million people worldwide, every mission advances our ultimate goal: making humanity a spacefaring civilization.</p>
              
              <h3 className="subsection-title">Vision: A Self-Sustaining City on Mars</h3>
              <p>We believe that to ensure the long-term survival of humanity, we must become a multiplanetary species. Earth is our cradle, but we cannot remain in our cradle forever. A self-sustaining city on Mars would serve as a backup drive for civilization—insurance against existential threats to life on Earth, whether from asteroid impacts, nuclear war, or other catastrophes.</p>

              <p>Starship, our fully reusable launch and landing system, is designed to carry crew and cargo to Earth orbit, the Moon, Mars, and beyond. Standing nearly 400 feet tall, it's the most powerful launch vehicle ever developed, capable of carrying 100+ metric tons to orbit and eventually transporting 100+ people per flight to Mars.</p>

              <h3 className="subsection-title">Core Values</h3>
              <div className="values-list">
                <div className="value-item">
                  <div className="value-marker"></div>
                  <div>
                    <strong>Relentless Innovation</strong>
                    <p>We challenge aerospace conventions through first principles thinking and rapid prototyping. Our test-to-failure philosophy means we learn faster than anyone else, iterating hardware at unprecedented speed to achieve breakthrough performance.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-marker"></div>
                  <div>
                    <strong>Mission-Driven Focus</strong>
                    <p>Everything we do is evaluated against one question: does this help make life multiplanetary? This singular focus drives decision-making across the company, from manufacturing processes to launch schedules to technology investments.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-marker"></div>
                  <div>
                    <strong>Extreme Reliability</strong>
                    <p>Human life depends on our work. We maintain the highest standards of engineering excellence, with exhaustive testing protocols and flight-proven heritage. Our track record speaks for itself: over 600 successful missions and counting.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-marker"></div>
                  <div>
                    <strong>Full Reusability</strong>
                    <p>The holy grail of rocketry. By making our rockets fully and rapidly reusable—like airplanes—we've cut the cost of space access by over 100x. This is what makes Mars colonization economically feasible and space accessible to everyone.</p>
                  </div>
                </div>
              </div>

              <h3 className="subsection-title">Team & Culture</h3>
              <p>We've assembled one of the most talented teams in aerospace—over 500 engineers, technicians, and specialists who share an audacious goal. Our team doesn't just have jobs; they have a mission. Every person at Aman SpaceX is contributing to the most important endeavor in human history: making life multiplanetary.</p>
            </div>

            <div className="timeline">
              <h3 className="subsection-title">Our Journey to Mars</h3>
              <div className="timeline-item">
                <div className="timeline-year">2015</div>
                <div className="timeline-content">
                  <h4>Foundation</h4>
                  <p>Company established in Bhavdhan, Pune with the mission to revolutionize space technology and make life multiplanetary. Began development of our first reusable rocket system.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2016</div>
                <div className="timeline-content">
                  <h4>First Vertical Landing</h4>
                  <p>Achieved first successful controlled vertical landing of a rocket first stage, proving that propulsive landing technology works and paving the way for full reusability.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2017</div>
                <div className="timeline-content">
                  <h4>Historic Reflight</h4>
                  <p>Launched and landed the first orbital class reused rocket, demonstrating that rapid reusability is economically viable. This breakthrough reduced launch costs by 30%.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2018</div>
                <div className="timeline-content">
                  <h4>Heavy-Lift Capability</h4>
                  <p>Successfully tested our heavy-lift launch vehicle with dual booster landings. Achieved payload capacity exceeding all operational rockets by a factor of two.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h4>Crewed Spaceflight</h4>
                  <p>Became the first private company to send astronauts to orbit and the ISS. Dragon spacecraft certified for human spaceflight by ISRO, establishing commercial crew capability.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2022</div>
                <div className="timeline-content">
                  <h4>Starlink Operational</h4>
                  <p>Deployed operational constellation of 3,000+ satellites providing high-speed internet globally. Starlink now serves 6M+ users and funds our Mars program development.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024</div>
                <div className="timeline-content">
                  <h4>Starship Development</h4>
                  <p>Completed multiple orbital test flights of Starship, the world's most powerful rocket. Demonstrated controlled reentry and ocean splashdown of both stages. Mars-capable vehicle on track.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2026</div>
                <div className="timeline-content">
                  <h4>Mars Mission Prep</h4>
                  <p>Currently preparing for first uncrewed Starship missions to Mars. Planning cargo delivery of equipment, habitats, and propellant production systems to establish infrastructure before human arrival by 2030.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderServices = () => (
    <div className="page-content">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">Comprehensive space solutions for the modern era</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-link">Learn More →</button>
              </div>
            ))}
          </div>

          <div className="capabilities-section">
            <h2 className="section-title">Launch Vehicle Capabilities</h2>
            <p style={{ fontSize: '1.1rem', color: 'rgba(232, 244, 248, 0.8)', marginBottom: '3rem', lineHeight: '1.8' }}>
              Aman SpaceX vehicles are designed and manufactured from the ground up by our team for maximum reliability and performance. Our proven track record of over 600 missions demonstrates the capabilities required to transport crew and cargo to orbit, the ISS, the Moon, and Mars.
            </p>
            <div className="capabilities-grid">
              <div className="capability">
                <h4>Payload to LEO</h4>
                <div className="capability-bar">
                  <div className="capability-fill" style={{ width: '95%' }}>
                    <span>22,800 kg (Falcon 9) | 150,000 kg (Starship)</span>
                  </div>
                </div>
              </div>
              <div className="capability">
                <h4>Payload to Mars</h4>
                <div className="capability-bar">
                  <div className="capability-fill" style={{ width: '92%' }}>
                    <span>100+ metric tons (Starship)</span>
                  </div>
                </div>
              </div>
              <div className="capability">
                <h4>Reusability</h4>
                <div className="capability-bar">
                  <div className="capability-fill" style={{ width: '98%' }}>
                    <span>20+ flights per booster (Falcon 9)</span>
                  </div>
                </div>
              </div>
              <div className="capability">
                <h4>Launch Cadence</h4>
                <div className="capability-bar">
                  <div className="capability-fill" style={{ width: '88%' }}>
                    <span>165+ launches in 2025</span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="section-title" style={{ marginTop: '6rem' }}>Integrated Mission Services</h2>
            <div className="support-grid">
              <div className="support-card">
                <h4>Launch Operations</h4>
                <ul>
                  <li>Dedicated and rideshare launch options</li>
                  <li>Custom trajectory design and optimization</li>
                  <li>Integrated payload processing facilities</li>
                  <li>Real-time mission control and telemetry</li>
                  <li>Vertical integration for rapid turnaround</li>
                </ul>
              </div>
              <div className="support-card">
                <h4>Human Spaceflight</h4>
                <ul>
                  <li>Dragon crew transportation to ISS</li>
                  <li>Private astronaut missions</li>
                  <li>NASA Commercial Crew Program certified</li>
                  <li>Life support and emergency systems</li>
                  <li>Crew training and mission preparation</li>
                </ul>
              </div>
              <div className="support-card">
                <h4>Deep Space Missions</h4>
                <ul>
                  <li>Lunar surface cargo delivery</li>
                  <li>Mars cargo and crew transportation</li>
                  <li>In-situ propellant production systems</li>
                  <li>Long-duration life support</li>
                  <li>Interplanetary trajectory planning</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '6rem', padding: '3rem', background: 'rgba(123, 44, 191, 0.05)', borderRadius: '24px', border: '1px solid rgba(123, 44, 191, 0.2)' }}>
              <h3 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Path to Mars</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(232, 244, 248, 0.8)', marginBottom: '1rem' }}>
                Building a city on Mars will require significant resources. Starship is designed to ultimately carry up to 100 people on long-duration interplanetary flights. Its fully reusable design makes it possible to build spacecraft at scale—by building many ships, we can bring the cost down through economies of scale and make Mars accessible.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(232, 244, 248, 0.8)' }}>
                The first Starship missions to Mars will focus on confirming water resources and identifying hazards. These uncrewed missions will also establish power, mining, and life support infrastructure for future crew missions. Our goal is to make a self-sustaining city on Mars within our lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContact = () => (
    <div className="page-content">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Let's discuss your space mission</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title">Join the Mission</h2>
              <p>Whether you're planning a satellite deployment, need launch services for your payload, interested in Starlink connectivity, or want to partner with us on our journey to Mars—we want to hear from you.</p>
              
              <p>We work with government space agencies, commercial satellite operators, research institutions, telecommunications companies, and visionaries who share our goal of making life multiplanetary. Our team is ready to discuss your mission requirements and explore how we can help you reach orbit and beyond.</p>

              <p style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(0, 217, 255, 0.05)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
                <strong style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--primary)' }}>Become a Supplier</strong>
                Interested in supporting the most ambitious space program in history? We're always looking for suppliers who can meet our exacting standards and help us scale production for Mars colonization.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={24} />
                  <div>
                    <strong>Email</strong>
                    <p>aman774554@gmail.com<br/>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(232, 244, 248, 0.5)' }}>For launch inquiries</span><br/>
                    partnerships@amanspacex.com<br/>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(232, 244, 248, 0.5)' }}>For business development</span></p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <strong>Phone</strong>
                    <p>+91 98765 43210<br/>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(232, 244, 248, 0.5)' }}>Business Hours: Mon-Fri, 9 AM - 6 PM IST</span><br/>
                    +91 98765 43211<br/>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(232, 244, 248, 0.5)' }}>24/7 Launch Operations Hotline</span></p>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <strong>Headquarters</strong>
                    <p>Aman Space X<br/>
                    Bhavdhan, Pune<br />
                    Maharashtra, India 411021<br/>
                    <span style={{ fontSize: '0.9rem', color: 'rgba(232, 244, 248, 0.5)' }}>Manufacturing & Launch Operations</span></p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(123, 44, 191, 0.05)', borderRadius: '12px' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'Orbitron, sans-serif' }}>Mission Control Hours</h4>
                <p style={{ margin: '0.5rem 0' }}><strong>Launch Operations:</strong> 24/7/365</p>
                <p style={{ margin: '0.5rem 0' }}><strong>Business Development:</strong> Mon-Fri, 9 AM - 6 PM IST</p>
                <p style={{ margin: '0.5rem 0' }}><strong>Facility Tours:</strong> By appointment (limited availability)</p>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label>Service Interest</label>
                <select>
                  <option>Select a service</option>
                  <option>Falcon Launch Services</option>
                  <option>Starship Missions</option>
                  <option>Dragon Crew/Cargo</option>
                  <option>Starlink Internet</option>
                  <option>Mars Transportation</option>
                  <option>Partnership Opportunities</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'services': return renderServices();
      case 'contact': return renderContact();
      default: return renderHome();
    }
  };

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #00d9ff;
          --secondary: #7b2cbf;
          --accent: #ff006e;
          --dark: #0a0e27;
          --darker: #050714;
          --light: #e8f4f8;
        }

        body {
          font-family: 'Exo 2', sans-serif;
          background: var(--darker);
          color: var(--light);
          overflow-x: hidden;
        }

        .app {
          min-height: 100vh;
          position: relative;
        }

        /* Background Stars Animation */
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .stars-layer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, white, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent),
            radial-gradient(2px 2px at 90% 60%, white, transparent),
            radial-gradient(1px 1px at 33% 80%, white, transparent),
            radial-gradient(1px 1px at 15% 90%, white, transparent);
          background-size: 200% 200%;
          animation: twinkle 4s ease-in-out infinite;
          pointer-events: none;
          z-index: 0;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 2rem;
          background: rgba(10, 14, 39, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 217, 255, 0.1);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 2px;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links li {
          cursor: pointer;
          font-weight: 600;
          letter-spacing: 1px;
          position: relative;
          transition: color 0.3s;
          text-transform: uppercase;
          font-size: 0.9rem;
        }

        .nav-links li:hover {
          color: var(--primary);
        }

        .nav-links li.active {
          color: var(--primary);
        }

        .nav-links li.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--light);
          cursor: pointer;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: 
            radial-gradient(ellipse at 50% 20%, rgba(123, 44, 191, 0.15), transparent),
            radial-gradient(ellipse at 80% 80%, rgba(0, 217, 255, 0.1), transparent),
            var(--darker);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem;
        }

        .hero-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 5rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .title-line {
          display: block;
          animation: slideInUp 0.8s ease-out;
        }

        .title-line.highlight {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation-delay: 0.2s;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(232, 244, 248, 0.7);
          margin-bottom: 3rem;
          animation: fadeIn 1s ease-out 0.5s both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cta-button {
          padding: 1.2rem 3rem;
          font-size: 1.1rem;
          font-weight: 600;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border: none;
          border-radius: 50px;
          color: white;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 1px;
          text-transform: uppercase;
          animation: fadeIn 1s ease-out 0.7s both;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .scroll-line {
          width: 2px;
          height: 60px;
          background: linear-gradient(to bottom, var(--primary), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(10px); }
        }

        /* Page Content */
        .page-content {
          position: relative;
          z-index: 1;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Intro Section */
        .intro-section {
          padding: 8rem 0;
          position: relative;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .section-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--light), var(--primary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .intro-text p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: rgba(232, 244, 248, 0.8);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .stat-card {
          background: rgba(0, 217, 255, 0.05);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(0, 217, 255, 0.2);
          text-align: center;
          transition: all 0.3s;
        }

        .stat-card:hover {
          background: rgba(0, 217, 255, 0.1);
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .stat-number {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          font-weight: 900;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: rgba(232, 244, 248, 0.7);
          font-size: 1rem;
          letter-spacing: 1px;
        }

        /* Feature Cards */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .feature-card {
          background: rgba(123, 44, 191, 0.05);
          border: 1px solid rgba(123, 44, 191, 0.2);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.3s;
        }

        .feature-card:hover {
          background: rgba(123, 44, 191, 0.1);
          border-color: var(--secondary);
          transform: translateY(-5px);
        }

        .feature-card h3 {
          font-family: 'Orbitron', sans-serif;
          color: var(--primary);
          font-size: 1.4rem;
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: rgba(232, 244, 248, 0.8);
          line-height: 1.7;
        }

        /* Support Cards */
        .support-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }

        .support-card {
          background: rgba(0, 217, 255, 0.03);
          border: 1px solid rgba(0, 217, 255, 0.15);
          border-radius: 20px;
          padding: 2.5rem;
        }

        .support-card h4 {
          font-family: 'Orbitron', sans-serif;
          color: var(--primary);
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
        }

        .support-card ul {
          list-style: none;
          padding: 0;
        }

        .support-card li {
          color: rgba(232, 244, 248, 0.8);
          padding: 0.7rem 0;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
        }

        .support-card li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: bold;
        }

        /* Page Header */
        .page-header {
          padding: 10rem 0 5rem;
          text-align: center;
          background: radial-gradient(ellipse at center, rgba(123, 44, 191, 0.1), transparent);
        }

        .page-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 4rem;
          font-weight: 900;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .page-subtitle {
          font-size: 1.3rem;
          color: rgba(232, 244, 248, 0.7);
        }

        /* Content Section */
        .content-section {
          padding: 5rem 0 8rem;
        }

        /* About Page */
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
        }

        .large-text {
          font-size: 1.4rem;
          line-height: 1.6;
          color: var(--primary);
          margin-bottom: 2rem;
          font-weight: 300;
        }

        .about-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: rgba(232, 244, 248, 0.8);
        }

        .subsection-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.8rem;
          color: var(--primary);
          margin: 3rem 0 2rem;
        }

        .values-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .value-item {
          display: flex;
          gap: 1.5rem;
        }

        .value-marker {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .value-item strong {
          display: block;
          color: var(--light);
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
        }

        .value-item p {
          color: rgba(232, 244, 248, 0.7);
          margin: 0;
        }

        /* Timeline */
        .timeline {
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 60px;
          top: 60px;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--primary), transparent);
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
          position: relative;
        }

        .timeline-year {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          text-align: right;
          position: relative;
        }

        .timeline-year::after {
          content: '';
          position: absolute;
          right: -26px;
          top: 8px;
          width: 12px;
          height: 12px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 20px var(--primary);
        }

        .timeline-content h4 {
          color: var(--light);
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .timeline-content p {
          color: rgba(232, 244, 248, 0.7);
          line-height: 1.6;
        }

        /* Services */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          margin-bottom: 6rem;
        }

        .service-card {
          background: rgba(0, 217, 255, 0.03);
          border: 1px solid rgba(0, 217, 255, 0.15);
          border-radius: 24px;
          padding: 3rem;
          transition: all 0.4s;
          animation: fadeInUp 0.6s ease-out both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-card:hover {
          background: rgba(0, 217, 255, 0.08);
          border-color: var(--primary);
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0, 217, 255, 0.2);
        }

        .service-icon {
          color: var(--primary);
          margin-bottom: 2rem;
          transition: transform 0.3s;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .service-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.6rem;
          margin-bottom: 1rem;
          color: var(--light);
        }

        .service-description {
          color: rgba(232, 244, 248, 0.7);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .service-link {
          background: none;
          border: none;
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .service-link:hover {
          color: var(--accent);
          transform: translateX(5px);
        }

        /* Capabilities */
        .capabilities-section {
          margin-top: 6rem;
        }

        .capabilities-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .capability h4 {
          color: var(--light);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .capability-bar {
          background: rgba(0, 217, 255, 0.1);
          border-radius: 50px;
          height: 60px;
          overflow: hidden;
          position: relative;
        }

        .capability-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--secondary), var(--primary));
          display: flex;
          align-items: center;
          padding: 0 2rem;
          transition: width 1s ease-out;
          position: relative;
        }

        .capability-fill::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .capability-fill span {
          position: relative;
          z-index: 1;
          font-weight: 600;
          color: white;
        }

        /* Contact */
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 6rem;
        }

        .contact-info {
          padding-right: 2rem;
        }

        .contact-info p {
          color: rgba(232, 244, 248, 0.8);
          line-height: 1.8;
          margin-bottom: 3rem;
          font-size: 1.1rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .contact-item svg {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 4px;
        }

        .contact-item strong {
          display: block;
          color: var(--light);
          margin-bottom: 0.3rem;
          font-size: 1.1rem;
        }

        .contact-item p {
          color: rgba(232, 244, 248, 0.7);
          margin: 0;
          line-height: 1.6;
        }

        /* Form */
        .contact-form {
          background: rgba(0, 217, 255, 0.03);
          border: 1px solid rgba(0, 217, 255, 0.15);
          border-radius: 24px;
          padding: 3rem;
        }

        .form-group {
          margin-bottom: 2rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.8rem;
          color: var(--light);
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(10, 14, 39, 0.5);
          border: 1px solid rgba(0, 217, 255, 0.2);
          border-radius: 12px;
          color: var(--light);
          font-family: 'Exo 2', sans-serif;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(10, 14, 39, 0.8);
          box-shadow: 0 0 20px rgba(0, 217, 255, 0.2);
        }

        .form-group textarea {
          resize: vertical;
        }

        .submit-button {
          width: 100%;
          padding: 1.2rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }

          .intro-grid,
          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .services-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }

          .support-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .nav-links.mobile-open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 14, 39, 0.98);
            padding: 2rem;
            gap: 1.5rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .timeline::before {
            left: 50px;
          }

          .timeline-item {
            grid-template-columns: 80px 1fr;
            gap: 1rem;
          }

          .timeline-year::after {
            right: -20px;
          }

          .feature-card,
          .support-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      <nav>
        <div className="nav-container">
          <div className="logo">AMAN SpaceX</div>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            {navigation.map(item => (
              <li
                key={item.id}
                className={currentPage === item.id ? 'active' : ''}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {renderPage()}
    </div>
  );
};

export default SpaceWebsite;
