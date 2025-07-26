"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Award,
  Users,
  Wrench,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  CheckCircle,
  Globe,
  Calendar,
  Settings,
  Zap,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const TestMachineWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Product 인터페이스 정의
  interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
    features: string[];
    power: string;
    efficiency: string;
    url: string;
  }

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "products", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const products: Product[] = [
    {
      id: 1,
      name: "정밀 CNC 머시닝센터",
      category: "PRECISION",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      description:
        "극한의 정밀도를 요구하는 고급 부품 가공을 위한 최첨단 CNC 머시닝센터",
      features: ["±0.002mm 초정밀", "무인 24시간 운전", "AI 예측 정비"],
      power: "95%",
      efficiency: "ULTRA HIGH",
      url: "/products/cnc-machining",
    },
    {
      id: 2,
      name: "고속 자동화 생산라인",
      category: "AUTOMATION",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
      description: "대량 생산을 위한 완전 자동화 시스템으로 생산성을 극대화",
      features: ["시간당 2000개", "무결점 품질관리", "실시간 모니터링"],
      power: "88%",
      efficiency: "HIGH SPEED",
      url: "/products/automation-line",
    },
    {
      id: 3,
      name: "초고압 성형프레스",
      category: "HEAVY DUTY",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      description:
        "극한의 압력으로 최고 강도의 부품을 성형하는 중장비급 프레스",
      features: ["1000톤 압력", "방폭 안전시스템", "정밀 압력제어"],
      power: "100%",
      efficiency: "MAXIMUM",
      url: "/products/heavy-duty-press",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 네비게이션 - 다크 고정바 */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="relative">
                <Settings className="h-8 w-8 text-orange-500 mr-3" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                TestMachine
              </span>
            </motion.div>

            {/* 데스크톱 메뉴 */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "HOME" },
                { id: "about", label: "COMPANY" },
                { id: "products", label: "PRODUCTS" },
                { id: "contact", label: "CONTACT" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wider transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-300 hover:text-orange-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900 border-t border-gray-800"
            >
              <div className="px-4 py-2 space-y-1">
                {[
                  { id: "home", label: "HOME" },
                  { id: "about", label: "COMPANY" },
                  { id: "products", label: "PRODUCTS" },
                  { id: "contact", label: "CONTACT" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-orange-400 hover:bg-gray-800 rounded-md"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 히어로 섹션 - 기계 이미지 메인 */}
      <section
        id="home"
        className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* 왼쪽: 기계 이미지 (메인) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&h=500&fit=crop"
                  alt="Industrial Machine"
                  className="rounded-xl shadow-2xl border border-gray-700"
                />
                {/* 3D 효과를 위한 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-xl"></div>

                {/* 파워 인디케이터 */}
                <div className="absolute top-4 right-4 bg-black/80 p-3 rounded-lg border border-orange-500/50">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    <span className="text-orange-500 font-bold text-sm">
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* 스펙 카드 */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-8 -right-8 bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-600 shadow-2xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500 mb-1">
                      500+
                    </div>
                    <div className="text-gray-400 text-sm">설치 완료</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* 오른쪽: 텍스트 콘텐츠 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/30 mb-6">
                <Target className="h-4 w-4 text-orange-500 mr-2" />
                <span className="text-orange-400 text-sm font-medium tracking-wide">
                  PRECISION ENGINEERING
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="text-white">POWERFUL</span>
                <br />
                <span className="text-orange-500">MACHINES</span>
                <br />
                <span className="text-gray-300 text-3xl lg:text-4xl">
                  FOR THE FUTURE
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                30년간 축적된 기술력으로 극한의 성능을 구현하는
                <span className="text-orange-400 font-semibold">
                  {" "}
                  산업용 정밀기계
                </span>
                를 제조합니다.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { label: "PRECISION", value: "±0.002mm" },
                  { label: "POWER", value: "1000T" },
                  { label: "SPEED", value: "2000/h" },
                ].map((spec, index) => (
                  <div
                    key={index}
                    className="text-center p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                  >
                    <div className="text-orange-500 font-bold text-lg">
                      {spec.value}
                    </div>
                    <div className="text-gray-400 text-xs">{spec.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => scrollToSection("products")}
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center group shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  제품 라인업
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-gray-600 hover:border-orange-500 hover:bg-orange-500/10 px-8 py-4 rounded-lg font-bold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  기술 상담
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 하단 스크롤 인디케이터 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* 회사 소개 섹션 */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/30 mb-6">
              <Shield className="h-4 w-4 text-orange-500 mr-2" />
              <span className="text-orange-400 text-sm font-medium tracking-wide">
                COMPANY PROFILE
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
              ENGINEERED FOR
              <span className="block text-orange-500">EXCELLENCE</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              1993년부터 산업용 정밀기계 분야를 선도하며, 극한의 품질과 성능을
              추구하는 기술 혁신 기업입니다.
            </p>
          </motion.div>

          {/* 가로 구성: 왼쪽 텍스트, 오른쪽 이미지 */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Wrench className="h-6 w-6 text-orange-500 mr-3" />
                MISSION & VISION
              </h3>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                극한의 정밀도와 내구성을 요구하는 산업 현장에서 최고의 성능을
                발휘하는 기계를 설계하고 제조합니다.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Target, text: "극한 정밀도 구현" },
                  { icon: Shield, text: "무결점 품질 보증" },
                  { icon: Zap, text: "혁신적 기술 적용" },
                  { icon: TrendingUp, text: "지속적 성능 향상" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-colors"
                  >
                    <item.icon className="h-5 w-5 text-orange-500 mr-4" />
                    <span className="text-gray-300 font-medium">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop"
                alt="Company"
                className="rounded-xl shadow-2xl border border-gray-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-xl"></div>
            </motion.div>
          </div>

          {/* 통계 - 가로 배치 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                number: "30+",
                label: "YEARS",
                color: "orange",
              },
              { icon: Users, number: "500+", label: "CLIENTS", color: "blue" },
              { icon: Award, number: "50+", label: "PATENTS", color: "green" },
              {
                icon: Globe,
                number: "15+",
                label: "COUNTRIES",
                color: "purple",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4 border border-gray-600">
                  <stat.icon className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-3xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 제품 섹션 */}
      <section
        id="products"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/30 mb-6">
              <Settings className="h-4 w-4 text-orange-500 mr-2" />
              <span className="text-orange-400 text-sm font-medium tracking-wide">
                PRODUCT LINE
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
              PRECISION
              <span className="block text-orange-500">MACHINERY</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              산업 현장의 극한 조건에서도 완벽한 성능을 발휘하는 최첨단 기계
              라인업
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* 카테고리 배지 */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                        {product.category}
                      </span>
                    </div>

                    {/* 효율성 표시 */}
                    <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-lg border border-orange-500/50">
                      <span className="text-orange-500 text-xs font-bold">
                        {product.efficiency}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                      {product.description}
                    </p>

                    {/* 파워 게이지 */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm font-medium">
                          POWER LEVEL
                        </span>
                        <span className="text-orange-500 text-sm font-bold">
                          {product.power}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-orange-600 to-orange-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: product.power }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>

                    {/* 특징 */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-300 mb-3 text-sm tracking-wide">
                        KEY FEATURES
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-gray-400"
                          >
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={product.url}>
                      <button className="w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-orange-600 hover:to-orange-500 text-white py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center group border border-gray-600 hover:border-orange-500">
                        상세 스펙 보기
                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full border border-orange-500/30 mb-6">
              <Phone className="h-4 w-4 text-orange-500 mr-2" />
              <span className="text-orange-400 text-sm font-medium tracking-wide">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
              TECHNICAL
              <span className="block text-orange-500">CONSULTATION</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              프로젝트 요구사항에 최적화된 맞춤형 솔루션을 제안해 드립니다.
            </p>
          </motion.div>

          {/* 가로 구성: 왼쪽 연락처, 오른쪽 폼 */}
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Zap className="h-6 w-6 text-orange-500 mr-3" />
                CONTACT INFO
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "기술 상담 전용",
                    info: "02-2000-5000",
                    subInfo: "평일 09:00 - 18:00",
                  },
                  {
                    icon: Mail,
                    title: "기술 지원 이메일",
                    info: "tech@testmachine.co.kr",
                    subInfo: "24시간 접수 가능",
                  },
                  {
                    icon: MapPin,
                    title: "기술 센터",
                    info: "서울시 금천구 가산디지털1로 168",
                    subInfo: "TestMachine 기술센터 12층",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                      <contact.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-white mb-1">
                        {contact.title}
                      </h4>
                      <p className="text-orange-400 font-semibold">
                        {contact.info}
                      </p>
                      <p className="text-gray-400 text-sm">{contact.subInfo}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 기술 지원 정보 */}
              <div className="mt-12 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <Wrench className="h-6 w-6 text-orange-500 mr-3" />
                  <h4 className="text-lg font-bold text-white">
                    TECHNICAL SUPPORT
                  </h4>
                </div>
                <p className="text-gray-400 mb-4">
                  구매 후에도 전문 엔지니어팀이 최고 수준의 기술 지원을
                  제공합니다.
                </p>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-3" />
                    24시간 긴급 출동 서비스
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-3" />
                    예방 정비 및 성능 최적화
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-orange-500 mr-3" />
                    전문 운영자 교육 프로그램
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* 오른쪽: 문의 폼 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="h-6 w-6 text-orange-500 mr-3" />
                PROJECT INQUIRY
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                      담당자명 *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-white placeholder-gray-400"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                      회사명
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-white placeholder-gray-400"
                      placeholder="(주)제조기업"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-white placeholder-gray-400"
                    placeholder="tech@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-white placeholder-gray-400"
                    placeholder="010-0000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    관심 제품군
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors text-white">
                    <option value="">선택해주세요</option>
                    <option value="cnc">정밀 CNC 머시닝센터</option>
                    <option value="automation">고속 자동화 생산라인</option>
                    <option value="press">초고압 성형프레스</option>
                    <option value="custom">맞춤형 솔루션</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                    프로젝트 상세 *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none text-white placeholder-gray-400"
                    placeholder="프로젝트 요구사항, 생산 목표, 기술적 조건 등을 상세히 기술해 주세요."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-4 rounded-lg font-bold transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  기술 상담 요청
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-orange-500 mr-3" />
                <span className="text-xl font-bold text-white tracking-wide">
                  TestMachine
                </span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                30년간 축적된 기술력으로 극한의 성능을 구현하는 산업용
                정밀기계를 제조하는 기술 혁신 기업입니다.
              </p>
              <div className="text-sm text-gray-500">
                <p>서울시 금천구 가산디지털1로 168</p>
                <p>TestMachine 기술센터 12층</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4 tracking-wide">
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "COMPANY", id: "about" },
                  { name: "PRODUCTS", id: "products" },
                  { name: "CONTACT", id: "contact" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-200 font-medium"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4 tracking-wide">
                CONTACT
              </h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-orange-500" />
                  <span>02-2000-5000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-orange-500" />
                  <span>tech@testmachine.co.kr</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2024 TestMachine. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                  개인정보처리방침
                </button>
                <button className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                  이용약관
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TestMachineWebsite;
