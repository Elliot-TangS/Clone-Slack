# Clone-Slack

A full-stack real-time messaging platform built with Next.js, inspired by Slack.

一个使用 Next.js 构建的全栈实时通讯平台，灵感来自 Slack。

🔗 **Live Demo / 在线演示:** [clone-slack-one.vercel.app](https://clone-slack-one.vercel.app)

---

## Features / 功能特性

- **Real-time Messaging / 实时消息** — Send and receive messages instantly with Convex real-time database / 基于 Convex 实时数据库，即时收发消息
- **Rich Text Editor / 富文本编辑器** — Quill-based editor with formatting toolbar (bold, italic, lists, links) / 基于 Quill 的编辑器，支持格式化工具栏（加粗、斜体、列表、链接）
- **Workspaces / 工作空间** — Create and manage multiple workspaces with invite codes / 创建和管理多个工作空间，支持邀请码加入
- **Channels / 频道** — Organize conversations into channels / 将对话组织到不同频道中
- **Direct Messages / 私信** — 1:1 conversations between workspace members / 工作空间成员之间的一对一对话
- **Threads / 线程回复** — Reply to messages in threaded conversations / 在线程中回复消息
- **Reactions / 表情回应** — React to messages with emojis / 使用表情符号回应消息
- **Image Uploads / 图片上传** — Share images in conversations / 在对话中分享图片
- **Member Management / 成员管理** — Admin role system with member invite, role change, and removal / 管理员角色系统，支持邀请、角色更改和移除成员
- **Search / 搜索** — Quick search across channels and members / 快速搜索频道和成员
- **Authentication / 身份验证** — Secure sign-up/sign-in with GitHub and Google OAuth / 支持 GitHub 和 Google OAuth 安全登录
- **Responsive UI / 响应式界面** — Resizable sidebar panels with modern design / 可调节侧边栏面板，现代化设计

## Tech Stack / 技术栈

| Category / 类别 | Technology / 技术 |
|---|---|
| Framework / 框架 | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Language / 语言 | TypeScript |
| Database / 数据库 | [Convex](https://convex.dev/) (Real-time backend) |
| Authentication / 认证 | [Convex Auth](https://convex.dev/auth) (GitHub, Google OAuth) |
| UI Components / UI 组件 | [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://radix-ui.com/) |
| Styling / 样式 | [Tailwind CSS v4](https://tailwindcss.com/) |
| Rich Text / 富文本 | [Quill](https://quilljs.com/) |
| State Management / 状态管理 | [Jotai](https://jotai.org/), [nuqs](https://nuqs.dev/) |
| Icons / 图标 | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| Notifications / 通知 | [Sonner](https://sonner.emilkowal.ski/) |

## Getting Started / 快速开始

### Prerequisites / 前置要求

- Node.js 18+
- A [Convex](https://convex.dev/) account
- GitHub / Google OAuth credentials (for authentication)

### Installation / 安装

```bash
# Clone the repository / 克隆仓库
git clone https://github.com/Elliot-TangS/Clone-Slack.git
cd Clone-Slack

# Install dependencies / 安装依赖
npm install --legacy-peer-deps

# Set up environment variables / 配置环境变量
cp .env.example .env.local
# Edit .env.local with your Convex and OAuth credentials
# 编辑 .env.local 填入你的 Convex 和 OAuth 配置
```

### Environment Variables / 环境变量

Create a `.env.local` file with the following:

```env
CONVEX_DEPLOYMENT=your_convex_deployment
NEXT_PUBLIC_CONVEX_URL=your_convex_url
AUTH_GITHUB_ID=your_github_oauth_id
AUTH_GITHUB_SECRET=your_github_oauth_secret
AUTH_GOOGLE_ID=your_google_oauth_id
AUTH_GOOGLE_SECRET=your_google_oauth_secret
```

### Development / 开发

```bash
# Start Convex dev server / 启动 Convex 开发服务器
npx convex dev

# In another terminal, start Next.js / 在另一个终端启动 Next.js
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

在浏览器中打开 [http://localhost:3000](http://localhost:3000)。

### Build / 构建

```bash
npm run build
```

## Project Structure / 项目结构

```
├── convex/                  # Convex backend (schema, mutations, queries)
│   ├── schema.ts            # Database schema definition
│   ├── messages.ts          # Message CRUD operations
│   ├── channels.ts          # Channel management
│   ├── members.ts           # Member management
│   ├── workspaces.ts        # Workspace management
│   ├── conversations.ts     # DM conversations
│   ├── reactions.ts         # Emoji reactions
│   └── upload.ts            # File upload
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── auth/            # Authentication page
│   │   ├── join/            # Workspace join page
│   │   └── workspace/       # Workspace pages (channels, DMs)
│   ├── components/          # Shared UI components
│   │   ├── ui/              # shadcn/ui base components
│   │   ├── editor.tsx       # Rich text editor (Quill)
│   │   ├── message.tsx      # Message display component
│   │   └── message-list.tsx # Paginated message list
│   ├── features/            # Feature modules
│   │   ├── auth/            # Authentication
│   │   ├── channels/        # Channel hooks
│   │   ├── members/         # Member hooks & profile
│   │   ├── messages/        # Message hooks & thread
│   │   ├── reactions/       # Reaction hooks
│   │   └── workspaces/      # Workspace hooks
│   └── hooks/               # Custom React hooks
```

## Author / 作者

**Elliot Tang** — [@Elliot-TangS](https://github.com/Elliot-TangS)

## License / 许可证

This project is for educational purposes.

此项目仅用于学习目的。
