import React, { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll } from 'framer-motion'
import { SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiPython, SiNodedotjs, SiPhp, SiMysql, SiMongodb, SiGraphql, SiGit, SiGithub, SiDocker, SiVite } from 'react-icons/si'
import translations from './i18n/translations.json'
import './App.css'

const github = 'https://github.com/luanacamilo'
const linkedin = 'https://www.linkedin.com/in/luana-camilo-b1b5a117a/'
const technologies = [
  ['React', SiReact, 'Frontend', '#65d5e8'], ['TypeScript', SiTypescript, 'Frontend', '#78a7e9'],
  ['JavaScript', SiJavascript, 'Frontend', '#ead265'], ['Tailwind CSS', SiTailwindcss, 'Frontend', '#65d5e8'], ['Next.js', SiNextdotjs, 'Frontend', '#e38bb3'],
  ['Python', SiPython, 'Backend', '#78a7e9'], ['Node.js', SiNodedotjs, 'Backend', '#7fc38c'], ['PHP', SiPhp, 'Backend', '#e38bb3'],
  ['SQL', SiMysql, 'Backend', '#e38bb3'], ['MongoDB', SiMongodb, 'Backend', '#7fc38c'], ['GraphQL', SiGraphql, 'Backend', '#e38bb3'],
  ['Git', SiGit, 'Ferramentas', '#e57f65'], ['GitHub', SiGithub, 'Ferramentas', '#e38bb3'], ['Docker', SiDocker, 'Ferramentas', '#65d5e8'], ['Vite', SiVite, 'Ferramentas', '#ead265'],
]
const nodes = [
  {name:'React', icon:SiReact, x:24,y:24, description:'Interfaces vivas. Experiências memoráveis.'},
  {name:'Node.js', icon:SiNodedotjs, x:83,y:24, description:'Serviços e APIs conectando experiências.'},
  {name:'Python', icon:SiPython, x:79,y:66, description:'Automação para transformar processos.'},
  {name:'SQL', icon:SiMysql, x:35,y:76, description:'Dados organizados. Decisões conectadas.'},
  {name:'Docker', icon:SiDocker, x:12,y:55, description:'Ambientes consistentes, do código à produção.'},
  {name:'TypeScript', icon:SiTypescript, x:52,y:43, description:'Estrutura e segurança para construir.'},
]
const projectMeta = [
  {category:'Full Stack', label:'FRONTEND + BACKEND', period:'EM ANDAMENTO', symbol:'▱', description:'Uma plataforma completa conectando interfaces, serviços e dados em uma experiência integrada.'},
  {category:'Automação', label:'AUTOMAÇÃO + PROCESSOS', period:'FLUXOS INTERNOS', symbol:'♧', description:'Menos tarefas repetitivas. Mais tempo para o que importa. Processos conectados com Python.'},
  {category:'Frontend', label:'UI + PERFORMANCE', period:'INTERFACE MODERNA', symbol:'‹/›', description:'Interfaces que equilibram atenção aos detalhes, experiência do usuário e performance.'},
]
function GitHubIcon(){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.3-2-1-2 3-.4 6-1.4 6-6 0-1.5-.5-2.5-1.5-3.5.2-1 .2-2-.2-3.5 0 0-1.3-.4-3.8 1.4a13 13 0 0 0-7 0C5 1.6 3.7 2 3.7 2c-.4 1.5-.4 2.5-.2 3.5C2.5 6.5 2 7.5 2 9c0 4.6 3 5.6 6 6-.7.5-1 1.4-1 2.5V22"/></svg>}
function SectionLabel({children,aside}){return <div className="section-label"><span>{children}</span><span>{aside}</span></div>}
function Tags({items}){return <div className="tags">{items.map(item=><span key={item}>{item}</span>)}</div>}
function Filters({options,value,onChange}){return <div className="filters" aria-label="Filtrar por categoria">{options.map(option=><button key={option} aria-pressed={value===option} className={value===option?'selected':''} onClick={()=>onChange(option)}>{option}</button>)}</div>}
function StackNetwork(){
 const [active,setActive]=useState(2)
 const [pos,setPos]=useState(()=>nodes.map(n=>({x:n.x,y:n.y})))
 const [time,setTime]=useState(0)
 const mapRef=useRef(null)
 const mouse=useRef(null)
 const reduced=useReducedMotion()
 useEffect(()=>{if(reduced)return; const timer=setInterval(()=>setActive(i=>(i+1)%nodes.length),3000);return ()=>clearInterval(timer)},[reduced])
 useEffect(()=>{
  if(reduced)return
  let frame,current=nodes.map(n=>({x:n.x,y:n.y}))
  const tick=now=>{
   const t=now/1000
   current=current.map((p,i)=>{
    const n=nodes[i],central=i===nodes.length-1
    let tx=n.x+Math.sin(t*.7+i*1.7)*(central?.6:1.4),ty=n.y+Math.cos(t*.6+i*2.3)*(central?.6:1.6)
    if(mouse.current){
     const dx=mouse.current.x-n.x,dy=mouse.current.y-n.y,pull=Math.max(0,1-Math.hypot(dx,dy)/55)*(central?.12:.28)
     tx+=dx*pull;ty+=dy*pull
    }
    return {x:p.x+(tx-p.x)*.08,y:p.y+(ty-p.y)*.08}
   })
   setPos(current);setTime(t);frame=requestAnimationFrame(tick)
  }
  frame=requestAnimationFrame(tick)
  return ()=>cancelAnimationFrame(frame)
 },[reduced])
 const track=e=>{const r=mapRef.current.getBoundingClientRect();mouse.current={x:(e.clientX-r.left)/r.width*100,y:(e.clientY-r.top)/r.height*100}}
 const center=pos[nodes.length-1],outer=pos.slice(0,-1)
 return <div className="network"><div className="network-heading"><span><i className="status-dot"/> SISTEMAS CONECTADOS</span><button aria-label="Próxima tecnologia" onClick={()=>setActive(i=>(i+1)%nodes.length)}>↻</button></div><div className="network-map" ref={mapRef} onPointerMove={track} onPointerLeave={()=>{mouse.current=null}}><svg className="network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="50" cy="48" rx="39" ry="35"/>{outer.map((p,i)=>{const next=outer[(i+1)%outer.length];return <line key={'c'+i} className="constellation" x1={p.x} y1={p.y} x2={next.x} y2={next.y}/>})}{outer.map((p,i)=><line key={i} className={active===i||active===nodes.length-1?'active':''} x1={center.x} y1={center.y} x2={p.x} y2={p.y}/>)}</svg>{!reduced&&outer.map((p,i)=>{const k=(time/(2.6+i*.45)+i*.2)%1;return <i key={i} className="network-pulse" style={{left:center.x+(p.x-center.x)*k+'%',top:center.y+(p.y-center.y)*k+'%',opacity:Math.sin(k*Math.PI)}}/>})}{nodes.map((n,i)=><button key={n.name} className={`network-node ${i===nodes.length-1?'central':''} ${i===active?'active':''}`} style={{left:pos[i].x+'%',top:pos[i].y+'%'}} onClick={()=>setActive(i)} onMouseEnter={()=>setActive(i)} aria-label={n.name} aria-pressed={active===i}><n.icon aria-hidden="true"/><small>{n.name}</small></button>)}</div><div className="network-caption"><div><strong>{nodes[active].name}</strong><p>{nodes[active].description}</p></div><span>↗</span></div></div>
}
function ProjectDialog({project,onClose}){
 const ref=useRef(null)
 useEffect(()=>{const previous=document.activeElement;ref.current.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{document.body.style.overflow=old;previous?.focus()}},[])
 return <dialog ref={ref} className="project-dialog" onCancel={onClose} onClick={e=>{if(e.target===ref.current)onClose()}}><button className="dialog-close" onClick={onClose} aria-label="Fechar projeto" autoFocus>×</button><p className="eyebrow">DETALHES DO PROJETO</p><h2>{project.title}</h2><p>{project.fullDescription}</p><h3>Funcionalidades</h3><ul>{project.features.map(f=><li key={f}>{f}</li>)}</ul><Tags items={project.technologies}/><a className="button primary" href={github} target="_blank" rel="noreferrer">Conhecer meu GitHub ↗</a></dialog>
}
export default function App(){
 const [activeSection,setActiveSection]=useState('home')
 const [expanded,setExpanded]=useState(false)
 const [projectFilter,setProjectFilter]=useState('Todos')
 const [skillFilter,setSkillFilter]=useState('Todos')
 const [selectedProject,setSelectedProject]=useState(null)
 const {scrollYProgress}=useScroll()
 const reduced=useReducedMotion()
 const reveal={initial:{opacity:reduced?1:0,y:reduced?0:18},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.08},transition:{duration:.55}}
 const projects=translations.pt_BR.projects.projects
 useEffect(()=>{document.documentElement.lang='pt-BR';const update=()=>{let current='home';for(const id of ['home','about','projects','contact']){if(document.getElementById(id).getBoundingClientRect().top<=150)current=id}setActiveSection(current)};window.addEventListener('scroll',update,{passive:true});update();return()=>window.removeEventListener('scroll',update)},[])
 return <><motion.div className="scroll-progress" style={{scaleX:scrollYProgress}}/><header className="site-header"><div className="container header-inner"><a className="brand" href="#home" aria-label="Luana Camilo — início">lc<span>.</span></a><nav aria-label="Navegação principal">{[['home','Início'],['about','Sobre'],['projects','Projetos'],['contact','Contato']].map(([id,label])=><a key={id} href={'#'+id} className={activeSection===id?'active':''} aria-current={activeSection===id?'location':undefined}>{label}</a>)}</nav><div className="header-right"><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a><span className="availability"><i className="status-dot"/> OPEN TO WORK</span></div></div></header>
 <main><section id="home" className="hero"><div className="container"><div className="hero-grid"><motion.div {...reveal}><p className="eyebrow hero-eyebrow">DESENVOLVEDORA FULL STACK</p><h1>Luana Camilo<span>.</span></h1><h2>Transformando ideias<br/>em <span>soluções completas.</span></h2><p className="hero-description">Entre interfaces, integrações e automações,<br/>construo experiências que fazem a diferença.</p><p className="location">♧ Americana, SP · Brasil</p><div className="hero-actions"><a className="button primary" href="#projects">Explorar projetos <span>↗</span></a><a className="button" href="#contact">Vamos conversar <span>→</span></a></div><p className="code-note"><span>‹/›</span> Código limpo. Conexões reais.</p></motion.div><StackNetwork/></div></div></section>
 <motion.section id="about" className="container section about" {...reveal}><SectionLabel aside="TECNOLOGIA COM PROPÓSITO">01 / SOBRE MIM</SectionLabel><div className="about-grid"><div><h2>Curiosidade que vira<br/><span>código.</span></h2><p className="about-intro">Uma visão de ponta a ponta.<br/>Um olhar atento aos detalhes.</p><a className="text-link" href="https://www.linkedin.com/in/luana-camilo-b1b5a117a/" target="_blank" rel="noopener noreferrer">Conheça minha trajetória ↗</a></div><div className="about-copy"><p>Meu nome é <strong>Luana Alves Camilo</strong> e sou apaixonada por criar soluções digitais que conectam tecnologia e eficiência.</p><p>Cursando <strong>Ciência da Computação (FAM)</strong>, venho consolidando uma bagagem sólida em desenvolvimento Full Stack, unindo fundamentos teóricos à prática do mercado corporativo e de projetos autônomos.</p><p>No front-end, crio interfaces com React, TypeScript e Tailwind. No back-end, conecto dados e serviços com Node.js, Python, PHP e C++, através de APIs RESTful e GraphQL.</p><p>Minha marca é a busca por otimização: automação de processos, integração de sistemas e conteinerização com Docker. Sempre com código limpo, segurança e colaboração.</p><div className="values"><span>✓ <span>Código manutenível</span></span><span>✓ <span>Aprendizado contínuo</span></span></div></div></div></motion.section>
 <motion.section id="experience" className="container section experience" {...reveal}><SectionLabel aside="CONSTRUINDO REPERTÓRIO">02 / EXPERIÊNCIA</SectionLabel><div className="section-heading"><h2>Da ideia à <span>prática.</span></h2><p>Onde venho conectando conhecimento,<br/>pessoas e produtos.</p></div><div className="experience-list">{[{period:'SET 2025 — ATUAL',type:'Experiência corporativa',company:'DUALL ENGENHARIA',title:'Estágio em TI — Desenvolvedora Full Stack',description:'Desenvolvimento e manutenção de plataformas web, automação de processos internos e integração de aplicações com bancos de dados relacionais e GraphQL.',tags:['JavaScript','React','PHP','Python','GraphQL','SQL'],icon:'‹/›'},{period:'JAN 2026 — ATUAL',type:'Projetos autônomos',company:'FREELANCER',title:'Desenvolvedora Full Stack',description:'Aplicações web sob demanda, interfaces responsivas, APIs REST com Node.js e persistência em MongoDB. Ambientes de desenvolvimento e deploy com Docker.',tags:['React','Node.js','TypeScript','Tailwind CSS','MongoDB','Docker'],icon:'{ }'},...(expanded?[{period:'EM ANDAMENTO',type:'Formação acadêmica',company:'FAM — FACULDADE DE AMERICANA',title:'Ciência da Computação',description:'Fundamentos de algoritmos, estruturas de dados, engenharia de software e banco de dados aplicados ao desenvolvimento Full Stack.',tags:['Algoritmos','Engenharia de software','Banco de dados'],icon:'{ }'}]:[])].map((e,i)=><article className="experience-row" key={e.company}><div className="experience-date"><span>{i===0&&<i className="status-dot"/>}{e.period}</span><p>{e.type}</p></div><div><p className="eyebrow">{e.company}</p><h3>{e.title}</h3><p>{e.description}</p><Tags items={e.tags}/></div><span className="experience-symbol">{e.icon}</span></article>)}</div><button className="experience-toggle" aria-expanded={expanded} onClick={()=>setExpanded(!expanded)}>{expanded?'⌃':'⌄'} <span>{expanded?'Mostrar menos':'Mais sobre minha experiência'}</span></button></motion.section>
 <motion.section id="projects" className="container section projects" {...reveal}><SectionLabel aside="SELEÇÃO DE TRABALHOS">03 / PROJETOS</SectionLabel><div className="section-heading"><h2>Ideias em <span>produção.</span></h2><p>Soluções que representam como penso<br/>produto, implementação e evolução.</p></div><Filters options={['Todos','Full Stack','Frontend','Automação']} value={projectFilter} onChange={setProjectFilter}/><div className="project-grid">{projects.map((project,i)=>{const meta=projectMeta[i];if(projectFilter!=='Todos'&&meta.category!==projectFilter)return null;return <article className="project-card" key={project.title}><button className="project-art" onClick={()=>setSelectedProject(project)} aria-label={'Explorar '+project.title}><div className="art-top"><span>{meta.label}</span><span>↗</span></div><div className={'mini-network mini-'+i}><span>‹/›</span><i/><strong>{meta.symbol}</strong><i/><span>{'{ }'}</span></div><div className="art-bottom"><b>0{i+1}</b><span>{meta.period}</span></div></button><div className="project-body"><p className="eyebrow">{meta.category}</p><h3>{project.title}</h3><p>{meta.description}</p><Tags items={project.technologies.slice(0,4)}/><button className="project-open" onClick={()=>setSelectedProject(project)}>Explorar projeto <span>↗</span></button></div></article>})}</div><div className="projects-bottom"><span>Cada projeto, uma nova conexão.</span><a href={github} target="_blank" rel="noreferrer"><GitHubIcon/> Mais no GitHub ↗</a></div></motion.section>
 <motion.section id="skills" className="container section skills" {...reveal}><SectionLabel aside="MINHA CAIXA DE FERRAMENTAS">04 / HABILIDADES</SectionLabel><div className="section-heading"><h2>Uma stack.<br/><span>Muitas possibilidades.</span></h2><Filters options={['Todos','Frontend','Backend','Ferramentas']} value={skillFilter} onChange={setSkillFilter}/></div><div className="skills-grid">{technologies.filter(t=>skillFilter==='Todos'||t[2]===skillFilter).map(([name,Icon,category,color])=><div className="skill-cell" key={name}><span className="skill-symbol" style={{color}}><Icon aria-hidden="true"/></span><div><h3>{name}</h3><p>{category}</p></div></div>)}</div></motion.section>
 <section id="contact" className="contact"><div className="container"><SectionLabel aside={<><i className="status-dot"/> ABERTA A OPORTUNIDADES</>}>05 / PRÓXIMA CONEXÃO</SectionLabel><div className="contact-grid"><div><p className="contact-prelude"><span>♧</span> O próximo projeto pode ser o seu.</p><h2>Vamos construir<br/><span>algo bom.</span><span className="contact-arrow">↗</span></h2><p>Oportunidades, freelas ou uma boa conversa sobre tecnologia.<br/>Estou pronta para a próxima conexão.</p></div><div className="contact-actions"><a className="button primary" href={linkedin} target="_blank" rel="noreferrer"><b>in</b> Vamos conversar ↗</a><a href={github} target="_blank" rel="noreferrer"><GitHubIcon/> github.com/luanacamilo ↗</a><a className="email-link" href="mailto:luanacamilotec@gmail.com">luanacamilotec@gmail.com ↗</a></div></div></div></section></main>
 <footer className="container"><span>© {new Date().getFullYear()} Luana Camilo</span><div><span>Feito com intenção & código.</span><a href="#home" aria-label="Voltar ao início">↗</a></div></footer>{selectedProject&&<ProjectDialog project={selectedProject} onClose={()=>setSelectedProject(null)}/>}</>
}
