import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../utils/animations'
import { useLanguage } from '../../hooks/useLanguage'
import './About.css'

function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {t('about.title')}
        </motion.h2>
        <motion.div 
          className="about-content"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="about-text">
            <motion.p variants={fadeInUp}>
              Meu nome é <strong>Luana Alves Camilo</strong> e sou apaixonada por criar soluções digitais que conectam tecnologia e eficiência. Cursando Ciência da Computação (FAM), venho consolidando uma bagagem sólida no desenvolvimento Full-Stack, unindo fundamentos teóricos rigorosos à prática do mercado corporativo e de projetos autônomos.
            </motion.p>

            <motion.p variants={fadeInUp}>
              No desenvolvimento de software, meu foco principal é a entrega de produtos completos e robustos. No <em>Front-end</em>, busco criar interfaces dinâmicas e modernas utilizando React, TypeScript e Tailwind. No <em>Back-end</em>, tenho experiência na construção e manutenção de serviços com Node.js, Python, PHP e C++, garantindo uma comunicação fluida entre dados e interface através de APIs RESTful e GraphQL.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Uma das marcas da minha trajetória é a busca constante por otimização: desenvolvo rotinas de automação de processos (inclusive com Python e IA), crio scripts personalizados para integração de sistemas e atuo com conteinerização usando Docker.
            </motion.p>

            <motion.p variants={fadeInUp}>
              Seja desenvolvendo um software do zero como freelancer ou otimizando pipelines e rotinas internas de engenharia, priorizo sempre a escrita de código limpo, a segurança das aplicações e o trabalho colaborativo sob versionamento constante. Estou pronta para contribuir em times de alta performance e continuar expandindo meus horizontes como desenvolvedora.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
