import "./AboutPage.css";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Target, Users, Award, History, ArrowRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Bulumba",
      role: "Campaign Leader",
      description:
        "Leading the vision for transforming Makerere University through innovative campaigns and community engagement.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Sarah Namukasa",
      role: "Academic Affairs Coordinator",
      description:
        "Overseeing the Guild Scholars Fund and academic excellence initiatives across all university colleges.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "David Okello",
      role: "Technology & Innovation Lead",
      description:
        "Spearheading Campus Coin development and innovation hub establishment around the campus perimeter.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Grace Atim",
      role: "Community Engagement Manager",
      description:
        "Building partnerships and managing volunteer programs to maximize community impact and participation.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, from academic support to infrastructure development.",
    },
    {
      icon: Users,
      title: "Inclusivity",
      description:
        "Our campaigns are designed to benefit all students, regardless of background, ensuring equal opportunities for success.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We embrace cutting-edge solutions and creative approaches to solve traditional university challenges.",
    },
    {
      icon: History,
      title: "Legacy",
      description:
        "We build upon Makerere's rich heritage while creating sustainable improvements for future generations.",
    },
  ];

  const milestones = [
    {
      year: "2024",
      title: "Campaign Launch",
      description:
        "Official launch of the Build Back Better initiative with five core campaigns.",
      status: "completed",
    },
    {
      year: "2024",
      title: "Guild Scholars Fund Established",
      description:
        "Successfully launched scholarship program supporting 100+ students in first phase.",
      status: "completed",
    },
    {
      year: "2024",
      title: "Campus Coin Development",
      description:
        "Beta testing of digital payment system with selected campus vendors.",
      status: "in-progress",
    },
    {
      year: "2025",
      title: "Innovation Hubs Opening",
      description:
        "Planned opening of first innovation hub facility around the perimeter wall.",
      status: "planned",
    },
    {
      year: "2025",
      title: "Complete Infrastructure Upgrade",
      description:
        "Full campus lighting upgrade and Guild Museum establishment.",
      status: "planned",
    },
  ];

  return (
    <div className="about-root">
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">
              About Our
              <span className="about-hero-highlight"> Campaign</span>
            </h1>
            <p className="about-hero-description">
              Bulumba's Build Back Better plan is a transformative initiative
              dedicated to empowering Makerere university students for a
              brighter future. Our goal is to foster innovation, support student
              success and preserve the rich history of this esteemed
              institution, ensuring it remains a beacon of Excel in Africa and
              beyond. We believe in collective action to build a stronger, more
              vibrant university community for generations to come.
            </p>
            <div className="about-hero-buttons">
              <Button asChild size="lg" className="about-vision-btn">
                <Link to="/vision">Our Vision</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="about-campaigns-btn"
              >
                <Link to="/campaigns">View Campaigns</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="about-mission">
        <div className="about-container">
          <Card className="about-mission-card">
            <CardContent className="about-mission-content">
              <div className="about-mission-quote-row">
                <Quote className="about-mission-quote-icon" />
                <div>
                  <blockquote className="about-mission-quote">
                    "Our mission is to transform Makerere University through
                    innovative campaigns that enhance student experience,
                    modernize infrastructure, and create lasting positive
                    impact. We believe that by working together, we can build
                    back better and establish Makerere as a leading institution
                    for the 21st century."
                  </blockquote>
                  <cite className="about-mission-cite">
                    Build Back Better Campaign Team
                  </cite>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="about-impact">
        <div className="about-container">
          <div className="about-impact-header">
            <h2 className="about-impact-title">Our Impact So Far</h2>
            <p className="about-impact-description">
              Measurable progress in our mission to transform Makerere
              University
            </p>
          </div>

          <div className="about-impact-grid">
            {[
              {
                number: "300+",
                label: "Students Supported",
                description: "Through various programs",
              },
              {
                number: "2",
                label: "Partners",
                description: "Organizations & businesses",
              },
              {
                number: "5",
                label: "Active Campaigns",
                description: "Comprehensive initiatives",
              },
            ].map((stat, index) => (
              <div key={index} className="about-impact-stat">
                <div className="about-impact-number">{stat.number}</div>
                <div className="about-impact-label">{stat.label}</div>
                <div className="about-impact-stat-description">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="about-container about-cta-content">
          <h2 className="about-cta-title">Ready to Join Our Story?</h2>
          <p className="about-cta-description">
            Be part of the transformation. Your involvement, whether big or
            small, contributes to building a better Makerere University for
            current and future students.
          </p>
          <div className="about-cta-buttons">
            <Button asChild size="lg" className="about-cta-join-btn">
              <Link to="/join">
                Join Us
                <ArrowRight className="about-cta-arrow" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="about-cta-contact-btn"
            >
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
