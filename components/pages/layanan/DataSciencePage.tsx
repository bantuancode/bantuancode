import React from "react";
import Link from "next/link";
import {
  FaBrain,
  FaChartLine,
  FaRobot,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
  FaCode,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiKeras,
  SiOpencv,
  SiPlotly,
  SiStreamlit,
} from "react-icons/si";

export const DataSciencePage = () => {
  const services = [
    {
      icon: FaBrain,
      title: "Machine Learning",
      description:
        "Implementasi algoritma machine learning untuk prediksi, klasifikasi, dan clustering dengan akurasi tinggi.",
      features: [
        "Classification (Binary & Multi-class)",
        "Regression (Linear, Polynomial, etc)",
        "Clustering (K-Means, Hierarchical)",
        "Decision Tree & Random Forest",
        "Support Vector Machine (SVM)",
        "Naive Bayes Classifier",
        "Model Evaluation & Tuning",
        "Feature Engineering & Selection",
        "Hyperparameter Optimization",
      ],
      techStack: [
        { icon: SiPython, name: "Python", color: "text-yellow-400" },
        { icon: SiScikitlearn, name: "Scikit-learn", color: "text-orange-400" },
        { icon: SiPandas, name: "Pandas", color: "text-blue-400" },
        { icon: SiNumpy, name: "NumPy", color: "text-cyan-400" },
        { icon: SiJupyter, name: "Jupyter", color: "text-orange-500" },
      ],
      examples: [
        "Prediksi Harga Rumah (Regression)",
        "Sentiment Analysis Tweet (Classification)",
        "Customer Segmentation (Clustering)",
        "Credit Scoring Model",
        "Disease Prediction System",
      ],
      priceStart: "250rb",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaChartLine,
      title: "Data Analysis",
      description:
        "Analisis data mendalam dengan visualisasi interaktif untuk menghasilkan insights yang actionable.",
      features: [
        "Exploratory Data Analysis (EDA)",
        "Data Cleaning & Preprocessing",
        "Statistical Analysis",
        "Data Visualization (Charts, Graphs)",
        "Correlation & Hypothesis Testing",
        "Time Series Analysis",
        "Dashboard Creation (Streamlit, Plotly)",
        "Report Generation (PDF/HTML)",
        "CSV/Excel Data Processing",
      ],
      techStack: [
        { icon: SiPython, name: "Python", color: "text-yellow-400" },
        { icon: SiPandas, name: "Pandas", color: "text-blue-400" },
        { icon: SiPlotly, name: "Plotly", color: "text-cyan-400" },
        { icon: SiStreamlit, name: "Streamlit", color: "text-red-400" },
        { icon: SiJupyter, name: "Jupyter", color: "text-orange-500" },
      ],
      examples: [
        "Sales Performance Dashboard",
        "COVID-19 Data Analysis",
        "E-Commerce Customer Behavior Analysis",
        "Financial Data Visualization",
        "Survey Data Analysis & Report",
      ],
      priceStart: "200rb",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaRobot,
      title: "AI Projects",
      description:
        "Deep learning dan artificial intelligence untuk computer vision, NLP, dan aplikasi AI kompleks.",
      features: [
        "Deep Neural Networks (DNN)",
        "Convolutional Neural Networks (CNN)",
        "Recurrent Neural Networks (RNN/LSTM)",
        "Computer Vision (Image Classification, Object Detection)",
        "Natural Language Processing (NLP)",
        "Text Classification & Sentiment Analysis",
        "Chatbot Development",
        "Transfer Learning (Pre-trained Models)",
        "Model Deployment & API",
      ],
      techStack: [
        { icon: SiTensorflow, name: "TensorFlow", color: "text-orange-400" },
        { icon: SiPytorch, name: "PyTorch", color: "text-red-400" },
        { icon: SiKeras, name: "Keras", color: "text-red-500" },
        { icon: SiOpencv, name: "OpenCV", color: "text-green-400" },
        { icon: SiPython, name: "Python", color: "text-yellow-400" },
      ],
      examples: [
        "Image Classification (CNN)",
        "Face Recognition System",
        "Text Summarization (NLP)",
        "Spam Detection AI",
        "Recommendation System",
      ],
      priceStart: "300rb",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  const benefits = [
    {
      icon: FaCode,
      title: "Documented Code",
      desc: "Setiap cell Jupyter Notebook ada penjelasan",
    },
    {
      icon: FaRocket,
      title: "Accurate Results",
      desc: "Model di-tune untuk mendapatkan akurasi terbaik",
    },
    {
      icon: FaShieldAlt,
      title: "Production Ready",
      desc: "Bisa langsung deploy atau presentasi",
    },
  ];

  const useCases = [
    {
      title: "Business Analytics",
      desc: "Sales forecasting, customer segmentation, churn prediction",
      icon: "📊",
    },
    {
      title: "Healthcare",
      desc: "Disease prediction, medical image analysis, patient clustering",
      icon: "🏥",
    },
    {
      title: "Finance",
      desc: "Stock prediction, fraud detection, credit scoring",
      icon: "💰",
    },
    {
      title: "E-Commerce",
      desc: "Recommendation systems, sentiment analysis, price optimization",
      icon: "🛒",
    },
    {
      title: "Social Media",
      desc: "Sentiment analysis, trend prediction, user behavior analysis",
      icon: "📱",
    },
    {
      title: "Education",
      desc: "Student performance prediction, learning path recommendation",
      icon: "🎓",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link
              href="/layanan"
              className="hover:text-cyan-400 transition-colors"
            >
              Layanan
            </Link>
            <span>/</span>
            <span className="text-white">Data Science & AI</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Data Science & AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Projects
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
              Layanan Machine Learning, Data Analysis, dan Artificial
              Intelligence untuk tugas kuliah, skripsi, atau research project.
              Dari data preprocessing hingga model deployment.
            </p>

            {/* Quick Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-lg p-4"
                  >
                    <Icon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <div>
                      <div className="text-white text-sm font-semibold">
                        {benefit.title}
                      </div>
                      <div className="text-slate-400 text-xs">
                        {benefit.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-8`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                          {service.title}
                        </h2>
                        <p className="text-white/80 text-sm">
                          Mulai dari{" "}
                          <span className="font-bold">
                            Rp {service.priceStart}
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Apa yang Anda Dapatkan:
                        </h3>
                        <ul className="space-y-2.5">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <FaCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-slate-300 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Examples & Tech Stack */}
                      <div>
                        {/* Tech Stack */}
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Tech Stack:
                        </h3>
                        <div className="flex flex-wrap gap-3 mb-6">
                          {service.techStack.map((tech, idx) => {
                            const TechIcon = tech.icon;
                            return (
                              <div
                                key={idx}
                                className="flex items-center gap-2 px-3 py-2 bg-slate-700 rounded-lg"
                              >
                                <TechIcon className={`w-5 h-5 ${tech.color}`} />
                                <span className="text-slate-300 text-sm">
                                  {tech.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Examples */}
                        <h3 className="text-lg font-semibold text-white mb-4">
                          Contoh Project:
                        </h3>
                        <ul className="space-y-2">
                          {service.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-purple-400 font-bold">
                                •
                              </span>
                              <span className="text-slate-300 text-sm">
                                {example}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="https://wa.me/6285182380899"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-200`}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>Konsultasi {service.title}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 md:py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Use Cases & Industry Applications
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Data Science & AI dapat diaplikasikan di berbagai bidang industri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-slate-400 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Pertanyaan Umum
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Apakah harus menyediakan dataset sendiri?",
                a: "Tidak harus. Jika Anda sudah punya dataset, kami akan gunakan itu. Jika tidak, kami bisa bantu cari dataset publik dari Kaggle, UCI, atau sumber lain yang relevan dengan topik Anda.",
              },
              {
                q: "Berapa akurasi model yang bisa dicapai?",
                a: "Tergantung kompleksitas data dan problem. Kami akan tuning model untuk mendapatkan akurasi terbaik. Umumnya untuk classification bisa 85-95%, untuk regression RMSE/MAE serendah mungkin.",
              },
              {
                q: "Apakah bisa request algoritma tertentu?",
                a: "Ya, bisa. Jika dosen mewajibkan algoritma spesifik (misal: Decision Tree, SVM, Neural Network), kami akan implementasikan sesuai requirement.",
              },
              {
                q: "Format deliverable apa saja?",
                a: "Jupyter Notebook (.ipynb) dengan penjelasan lengkap, dataset, trained model (.pkl/.h5), visualisasi hasil, dan laporan PDF jika diperlukan.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 group"
              >
                <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <FaArrowRight className="w-4 h-4 text-purple-400 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-purple-400 hover:text-purple-300 font-medium text-sm inline-flex items-center gap-2"
            >
              <span>Lihat Semua FAQ</span>
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Siap Mulai Data Science Project Anda?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Konsultasi gratis untuk diskusi dataset, algoritma, dan target
              akurasi. Tim kami berpengalaman dalam berbagai ML & AI projects.
            </p>
            <Link
              href="https://wa.me/6285182380899"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-base font-semibold rounded-lg shadow-lg shadow-green-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>Chat via WhatsApp Sekarang</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
