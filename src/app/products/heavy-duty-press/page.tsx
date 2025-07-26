"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';


import { 
  Settings,
  Zap,
  Shield,
  Gauge,
  Target,
  CheckCircle,
  Star,
  Phone,
  Mail,
  ArrowRight,
  ArrowLeft,
  Award,
  TrendingUp,
  AlertTriangle,
  Clock,
  Wrench,
  Users
} from 'lucide-react';




const HeavyDutyPressDetail = () => {
  const [activeTab, setActiveTab] = useState<'specs' | 'safety' | 'system'>('specs');

  interface SpecItem {
    label: string;
    value: string;
    unit: string;
    highlight?: boolean;
  }

  interface SpecificationData {
    specs: SpecItem[];
    safety: SpecItem[];
    system: SpecItem[];
  }

  const specifications: SpecificationData = {
    specs: [
      { label: "최대 압력", value: "1000톤", unit: "T", highlight: true },
      { label: "작업 영역", value: "1000 x 800", unit: "mm" },
      { label: "최대 스트로크", value: "300", unit: "mm" },
      { label: "압력 정밀도", value: "±0.5", unit: "%" },
      { label: "사이클 타임", value: "15", unit: "초" },
      { label: "작업대 높이", value: "800", unit: "mm" }
    ],
    safety: [
      { label: "안전 등급", value: "IP65", unit: "" },
      { label: "비상 정지", value: "0.2", unit: "초" },
      { label: "방폭 인증", value: "ATEX", unit: "" },
      { label: "소음 레벨", value: "< 75", unit: "dB" },
      { label: "진동 레벨", value: "< 2.5", unit: "mm/s" },
      { label: "안전 거리", value: "1500", unit: "mm" }
    ],
    system: [
      { label: "구동 방식", value: "서보 유압", unit: "" },
      { label: "제어 시스템", value: "PLC + HMI", unit: "" },
      { label: "유압 펌프", value: "가변 용량", unit: "" },
      { label: "냉각 시스템", value: "워터 쿨링", unit: "" },
      { label: "전력 소비", value: "45", unit: "kW" },
      { label: "작동 온도", value: "5~40", unit: "°C" }
    ]
  };

  const applications = [
    {
      industry: "자동차 부품",
      description: "엔진 블록, 변속기 하우징 등 고강도 부품 성형",
      pressure: "800-1000T",
      materials: "알루미늄 합금, 스틸"
    },
    {
      industry: "항공우주",
      description: "항공기 구조물, 엔진 부품 등 초정밀 성형",
      pressure: "600-900T", 
      materials: "티타늄, 스테인리스"
    },
    {
      industry: "조선 해양",
      description: "선박 구조재, 해양 플랜트 부품 성형",
      pressure: "900-1000T",
      materials: "해양용 강재"
    },
    {
      industry: "중장비",
      description: "건설기계 부품, 산업장비 구조물 성형",
      pressure: "700-1000T",
      materials: "고장력강, 합금강"
    }
  ];

  const testimonials = [
    {
      company: "현대중공업",
      person: "김철수 부장",
      role: "생산기술팀",
      comment: "1000톤급 압력으로 대형 선박 부품도 한 번에 성형 가능합니다. 정밀도와 안전성이 뛰어나 24시간 연속 가동해도 문제없습니다.",
      rating: 5,
      project: "해양플랜트 프로젝트"
    },
    {
      company: "기아자동차",
      person: "박영희 과장", 
      role: "품질관리팀",
      comment: "기존 장비 대비 불량률이 95% 감소했습니다. 특히 복잡한 형상의 부품도 완벽하게 성형되어 후가공이 거의 필요 없습니다.",
      rating: 5,
      project: "신차 양산 라인"
    },
    {
      company: "한국항공우주산업",
      person: "이민수 차장",
      role: "제조기술팀", 
      comment: "항공 부품의 까다로운 품질 기준을 완벽히 충족합니다. 압력 제어의 정밀함과 반복 정확도가 인상적입니다.",
      rating: 5,
      project: "KF-21 부품 생산"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 뒤로가기 버튼 */}
      <div className="pt-20 pb-4 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-orange-400 transition-colors duration-200 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>제품 목록으로</span>
          </Link>
        </div>
      </div>

      {/* 히어로 섹션 */}
      <section className="pb-12 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* 왼쪽: 제품 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=500&fit=crop"
                  alt="초고압 성형프레스"
                  className="rounded-xl shadow-2xl border border-gray-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent rounded-xl"></div>
                
                {/* 압력 게이지 */}
                <div className="absolute top-6 right-6 bg-black/90 p-4 rounded-xl border border-red-500/50">
                  <div className="flex items-center space-x-3">
                    <Gauge className="h-8 w-8 text-red-500" />
                    <div>
                      <div className="text-red-500 font-black text-2xl">1000T</div>
                      <div className="text-gray-400 text-xs">MAX PRESSURE</div>
                    </div>
                  </div>
                </div>

                {/* 안전 인증 */}
                <div className="absolute bottom-6 left-6 bg-black/90 p-3 rounded-lg border border-green-500/50">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="text-green-400 font-bold text-sm">CE + ATEX</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 오른쪽: 제품 정보 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 mb-6">
                <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                <span className="text-red-400 text-sm font-medium tracking-wide">HEAVY DUTY</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black mb-4 leading-tight">
                <span className="text-white">초고압</span><br/>
                <span className="text-red-500">성형프레스</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                <span className="text-red-400 font-bold">1000톤</span>의 극한 압력으로 
                최고 강도 부품을 정밀 성형하는 중장비급 프레스
              </p>

              {/* 핵심 스펙 */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Zap, label: "최대 압력", value: "1000T", color: "red" },
                  { icon: Target, label: "정밀도", value: "±0.5%", color: "blue" },
                  { icon: Clock, label: "사이클", value: "15초", color: "green" },
                  { icon: Shield, label: "안전등급", value: "IP65", color: "yellow" }
                ].map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 text-center"
                  >
                    <spec.icon className={`h-6 w-6 text-${spec.color}-500 mx-auto mb-2`} />
                    <div className={`text-${spec.color}-400 font-bold text-lg`}>{spec.value}</div>
                    <div className="text-gray-400 text-sm">{spec.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* 주요 특징 */}
              <div className="space-y-3 mb-8">
                {[
                  "최대 1000톤 압력으로 초고강도 부품 성형",
                  "방폭 인증 안전 시스템으로 위험 작업 환경 대응", 
                  "서보 유압 시스템으로 정밀한 압력 제어",
                  "24시간 연속 운전 가능한 내구성"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                전문 상담 받기
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 기술 사양 섹션 */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 mb-6">
              <Settings className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-red-400 text-sm font-medium tracking-wide">TECHNICAL SPECIFICATIONS</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
              극한 성능의
              <span className="block text-red-500">기술 사양</span>
            </h2>
          </motion.div>

          {/* 탭 네비게이션 */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900 rounded-lg p-1 border border-gray-700">
              {[
                { id: 'specs', label: '성능 사양', icon: Zap },
                { id: 'safety', label: '안전 사양', icon: Shield },
                { id: 'system', label: '시스템 사양', icon: Settings }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'specs' | 'safety' | 'system')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                    activeTab === tab.id
                      ? 'bg-red-500 text-white'
                      : 'text-gray-400 hover:text-red-400'
                  }`}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 사양 테이블 */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(specifications[activeTab] || []).map((spec: SpecItem, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  spec.highlight 
                    ? 'bg-gradient-to-r from-red-900/50 to-red-800/50 border-red-500/50 hover:border-red-400'
                    : 'bg-gray-900/50 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-gray-400 text-sm mb-2">{spec.label}</div>
                <div className={`text-2xl font-black mb-1 ${spec.highlight ? 'text-red-400' : 'text-white'}`}>
                  {spec.value}
                  <span className="text-lg text-gray-400 ml-1">{spec.unit}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 적용 사례 섹션 */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 mb-6">
              <Target className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-red-400 text-sm font-medium tracking-wide">APPLICATIONS</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
              산업별
              <span className="block text-red-500">적용 분야</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  {app.industry}
                </h3>
                <p className="text-gray-400 mb-4">{app.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">적용 압력:</span>
                    <div className="text-red-400 font-semibold">{app.pressure}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">대상 소재:</span>
                    <div className="text-gray-300 font-semibold">{app.materials}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 고객 후기 섹션 */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 mb-6">
              <Users className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-red-400 text-sm font-medium tracking-wide">CUSTOMER TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
              고객
              <span className="block text-red-500">성공 사례</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300"
              >
                {/* 별점 */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* 후기 내용 */}
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.comment}"</p>

                {/* 고객 정보 */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">{testimonial.person}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-red-400 font-bold">{testimonial.company}</div>
                      <div className="text-gray-500 text-sm">{testimonial.project}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 견적 문의 섹션 */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full border border-red-500/30 mb-6">
              <Phone className="h-4 w-4 text-red-500 mr-2" />
              <span className="text-red-400 text-sm font-medium tracking-wide">GET QUOTE</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
              전문가
              <span className="block text-red-500">상담 신청</span>
            </h2>
            <p className="text-xl text-gray-400">
              프로젝트 요구사항에 최적화된 맞춤형 솔루션을 제안해 드립니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    담당자명 *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-white"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    회사명 *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-white"
                    placeholder="(주)제조기업"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-white"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-white"
                    placeholder="tech@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  필요 압력 범위
                </label>
                <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-white">
                  <option value="">선택해주세요</option>
                  <option value="500-700">500-700톤</option>
                  <option value="700-900">700-900톤</option>
                  <option value="900-1000">900-1000톤</option>
                  <option value="custom">맞춤 사양</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-2">
                  프로젝트 상세 요구사항 *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none text-white"
                  placeholder="- 생산할 제품 종류와 크기&#10;- 필요한 압력 및 정밀도&#10;- 월 생산량 목표&#10;- 설치 환경 조건&#10;- 기타 특수 요구사항"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  전문 상담 신청
                </motion.button>
                <motion.button
                  type="button"
                  className="flex-1 border-2 border-gray-600 hover:border-red-500 hover:bg-red-500/10 text-white py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  이메일 문의
                </motion.button>
              </div>
            </form>

            {/* 연락처 정보 */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <div>
                    <div className="text-white font-semibold">기술 상담 전용</div>
                    <div className="text-red-400">02-2000-5000</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5 text-red-500" />
                  <div>
                    <div className="text-white font-semibold">기술 지원 이메일</div>
                    <div className="text-red-400">heavy-duty@testmachine.co.kr</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeavyDutyPressDetail;