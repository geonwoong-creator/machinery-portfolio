import Link from 'next/link';
import { 
  ArrowLeft, 
  Settings, 
  AlertTriangle, 
  CheckCircle, 
  Wrench,
  Monitor,
  Smartphone,
  Palette,
  Globe,
  Database,
  Users,
  Languages
} from 'lucide-react';

export default function NotFound() {
  const implementedFeatures = [
    { icon: Monitor, text: "메인 홈페이지", status: "완료" },
    { icon: Settings, text: "초고압 프레스 상세페이지", status: "완료" },
    { icon: Smartphone, text: "반응형 디자인", status: "완료" },
    { icon: Palette, text: "다크 테마 & 브랜딩", status: "완료" }
  ];

  const futureFeatures = [
    { icon: Settings, text: "전체 제품 상세페이지", status: "개발 예정" },
    { icon: Users, text: "회사 소개 상세", status: "개발 예정" },
    { icon: Database, text: "고객 관리 시스템", status: "개발 예정" },
    { icon: Languages, text: "다국어 지원", status: "개발 예정" },
    { icon: Globe, text: "SEO 최적화", status: "개발 예정" },
    { icon: Wrench, text: "관리자 패널", status: "개발 예정" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          {/* 404 메인 메시지 */}
          <div className="animate-fadeIn">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="h-16 w-16 text-red-500 mr-4" />
              <h1 className="text-8xl lg:text-9xl font-black text-red-500">404</h1>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              페이지를 찾을 수 없습니다
            </h2>
            
            <p className="text-xl text-gray-400 mb-8">
              시스템이 일시적으로 중단되었습니다.<br/>
              요청하신 페이지가 존재하지 않거나 이동되었습니다.
            </p>

            <div className="inline-flex items-center px-6 py-3 bg-orange-500/20 rounded-full border border-orange-500/30 mb-12">
              <Settings className="h-5 w-5 text-orange-500 mr-3" />
              <span className="text-orange-400 font-medium">PORTFOLIO DEMO</span>
            </div>
          </div>
        </div>

        {/* 포트폴리오 현황 섹션 */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 구현 완료 기능 */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">현재 구현된 기능</h3>
            </div>
            
            <div className="space-y-4">
              {implementedFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-green-500/10 rounded-lg border border-green-500/20"
                  >
                    <IconComponent className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300 flex-1">{feature.text}</span>
                    <span className="text-green-400 text-sm font-semibold px-3 py-1 bg-green-500/20 rounded-full">
                      {feature.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 향후 개발 예정 */}
          <div className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center mb-6">
              <Wrench className="h-6 w-6 text-orange-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">실제 제작 시 추가 가능</h3>
            </div>
            
            <div className="space-y-4">
              {futureFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/20"
                  >
                    <IconComponent className="h-5 w-5 text-orange-400 mr-3" />
                    <span className="text-gray-300 flex-1">{feature.text}</span>
                    <span className="text-orange-400 text-sm font-semibold px-3 py-1 bg-orange-500/20 rounded-full">
                      {feature.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 기술 스택 정보 */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 mb-12">
          <h3 className="text-xl font-bold text-white mb-6 text-center">사용된 기술 스택</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Next.js 13+", desc: "App Router" },
              { name: "TypeScript", desc: "타입 안정성" },
              { name: "TailwindCSS", desc: "스타일링" },
              { name: "Framer Motion", desc: "애니메이션" }
            ].map((tech, index) => (
              <div key={index} className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-600">
                <div className="text-orange-400 font-semibold">{tech.name}</div>
                <div className="text-gray-500 text-sm">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 네비게이션 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center group shadow-lg"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            포트폴리오 홈으로
          </Link>
          
          <Link
            href="/products/heavy-duty-press"
            className="border-2 border-gray-600 hover:border-orange-500 hover:bg-orange-500/10 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center"
          >
            <Settings className="mr-2 h-5 w-5" />
            구현된 제품 보기
          </Link>
        </div>

        {/* 하단 메시지 */}
        <div className="text-center mt-16 p-6 bg-gray-900/50 rounded-xl border border-gray-700">
          <p className="text-gray-400 mb-2">
            이 포트폴리오는 <span className="text-orange-400 font-semibold">프리랜서 웹 개발</span> 역량을 보여주기 위한 데모입니다.
          </p>
          <p className="text-gray-500 text-sm">
            실제 프로젝트에서는 고객 요구사항에 맞춘 완전한 기능을 구현합니다.
          </p>
        </div>
      </div>
    </div>
  );
}