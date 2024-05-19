import { TechStack } from 'app/projects/_components/TechStack'
interface ProjectDataProps {
  title: string
  description: string
  imgSrc: string
  href: string
  techStack: TechStack[]
}

const projectsData: ProjectDataProps[] = [
  {
    title: 'Conversational AI Platform',
    description:
      'A no-code platform for creating your own AI-based conversational agent which connected with LLMs like OpenAI GPT or Anthropic Claude.',
    href: 'https://conversational-ai-platform-web.vercel.app/landing',
    imgSrc: '/projects/conversational-ai-platform.png',
    techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    title: 'MultiGPT: Gen-AI-SaaS',
    description:
      'An AI-SaaS app using NextJS and Tailwind. It features a subscription based payment system using Stripe, user authentication, and a user-friendly interface. The app is deployed with Vercel for easy setup and scalability. It has several features like Chatbot, Code Generation, Image Generation, Audio Generation and Video Generation.',
    imgSrc: '/projects/multigpt.png',
    href: 'https://multi-gpt.vercel.app/',
    techStack: ['NextJS', 'React', 'JavaScript', 'MySQL'],
  },
  {
    title: 'AI Content Generator',
    description: 'A simple tool for content generating powered by OpenAI GPT-4.',
    imgSrc: '/projects/ai-content-generator.png',
    href: 'https://enostalabs-ai-content-generator.vercel.app/',
    techStack: ['React', 'JavaScript'],
  },
  {
    title: 'Click-Prompt',
    description: 'A simple tool to generate prompt for ChatGPT.',
    imgSrc: '/projects/click-prompt.png',
    href: 'https://click-prompt-gray.vercel.app/',
    techStack: ['NextJS', 'JavaScript'],
  },
  {
    title: 'Vietnamese ID Card OCR',
    description: 'A simple tool to extract information from chip-based Vietnamese ID Card',
    imgSrc: '/projects/id-card-ocr.png',
    href: '',
    techStack: ['Python', 'TensorFlow', 'NextJS'],
  },
  {
    title: 'Stable Diffusion WebUI',
    description: 'A simple tool to extract information from chip-based Vietnamese ID Card',
    imgSrc: '/projects/stable-diffusion.png',
    href: '',
    techStack: ['Python', 'TensorFlow'],
  },
]

export default projectsData
