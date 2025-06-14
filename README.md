# OUTPUT QUEST　~ 叡智の継承者 ~

![トップページ](/public/gif/README/top-page.gif)

アプリは以下からアクセスできます。

https://outputquest.com

## 目次

- [音声解説](#audio-guide)
- [開発構成図](#development-configuration-diagram)
- [使用技術](#technology-used)
- [ディレクトリ構造](#directory-design)
- [環境構築の手順](#environment-setup-procedure)
- [プロジェクト概要](#project-overview)
- [機能紹介](#feature-introduction)
- [アプリの使用方法](#how-to-use)

<h2 id="audio-guide">音声解説</h2>

アプリの概要や使い方について、音声で解説します。

[【音声解説】OUTPUT QUEST　~ 叡智の継承者 ~](https://notebooklm.google.com/notebook/92b2aa2d-41cb-4635-bebd-7386e35560f5/audio)

<h2 id="development-configuration-diagram">開発構成図</h2>

開発構成図を、HTMLインフォグラフィックで表現しました。

[開発構成図（HTMLインフォグラフィック）](https://aoyamadev.github.io/output-quest_development-configuration-diagram/)

<h2 id="technology-used">使用技術</h2>

<img src="https://img.shields.io/badge/-node.js-444.svg?logo=node.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-next.js-444.svg?logo=next.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-react-444.svg?logo=react&style=for-the-badge"> <img src="https://img.shields.io/badge/-typescript-444.svg?logo=typescript&style=for-the-badge"> <img src="https://img.shields.io/badge/-tailwindcss-444.svg?logo=tailwindcss&style=for-the-badge"> <img src="https://img.shields.io/badge/-shadcn/ui-444.svg?logo=shadcn/ui&style=for-the-badge">
<img src="https://img.shields.io/badge/-motion-444.svg?logo=motion&style=for-the-badge"> <img src="https://img.shields.io/badge/-howler.js-444.svg?logo=howler.js&style=for-the-badge"> <img src="https://img.shields.io/badge/-clerk-444.svg?logo=clerk&style=for-the-badge"> <img src="https://img.shields.io/badge/-prisma-444.svg?logo=prisma&style=for-the-badge"> <img src="https://img.shields.io/badge/-supabase-444.svg?logo=supabase&style=for-the-badge">

### nodeバージョン

- node v22.14.0
- pnpm v10.11.1

### フロント

- [Next.js](https://nextjs.org/blog/next-15-3)：v15.3.1
- [React](https://ja.react.dev/blog/2024/12/05/react-19)：v19.0.0
- [TypeScript](https://www.typescriptlang.org/)：v5

### スタイル・UI

- [Tailwind CSS](https://tailwindcss.com/)：v4.1.8
- [shadcn/ui](https://ui.shadcn.com/)

### アニメーション

- [Motion](https://motion.dev/)：v12.4.7

### オーディオ

- [Howler.js](https://howlerjs.com/)：v2.2.4

### 認証・データベース

- [Clerk](https://clerk.com/)：v6.12.0（認証）
- [Prisma](https://www.prisma.io/)：v6.8.2（ORM）
- [Supabase](https://supabase.com/)（PostgreSQL）

### ホスティング

- [Vercel](https://vercel.com/)

<h2 id="directory-design">ディレクトリ構造</h2>

```
outputquest/
├── .next/                                           # Next.jsビルド・キャッシュファイル
├── prisma/                                          # データベース関連ファイル
│   └── migrations/                                  # マイグレーションファイル
├── public/                                          # 静的ファイル
│   ├── audio/                                       # 音声ファイル
│   └── images/                                      # 画像ファイル
│       ├── arrow/                                   # 矢印画像
│       ├── common/                                  # 共通画像
│       ├── connection/                              # Zenn連携情報用画像
│       ├── home-character-icon/                     # トップページのキャラクターアイコン
│       ├── icon/                                    # アイコン類
│       ├── items-page/                              # アイテムページ用画像
│       ├── nav-icon/                                # ナビゲーションアイコン
│       └── party-page/                              # なかまページ用画像
├── src/
│   ├── app/                                         # ルートディレクトリ（ルーティング管理）
│   │   ├── (about)/                                 # アバウトページ（Route Groups）
│   │   │   ├── about/                               # アバウトページ
│   │   │   ├── AboutLayout.module.css               # アバウトページ（Route Groups）用CSS Modules
│   │   │   └── layout.tsx                           # アバウトページ（Route Groups）用レイアウトコンポーネント
│   │   ├── (connection)/                            # 接続・認証ページ（Route Groups）
│   │   │   ├── connection/                          # 接続・認証ページ
│   │   │   ├── ConnectionLayout.module.css          # 接続・認証ページ（Route Groups）用CSS Modules
│   │   │   └── layout.tsx                           # 接続・認証ページ（Route Groups）用レイアウトコンポーネント
│   │   ├── (dashboard)/                             # ダッシュボード（Route Groups）
│   │   │   ├── dashboard/                           # ダッシュボードページ
│   │   │   ├── equipment/                           # 装備詳細ページ
│   │   │   ├── items/                               # アイテムページ
│   │   │   ├── logs/                                # ログページ
│   │   │   ├── party/                               # なかまページ
│   │   │   ├── posts/                               # 投稿ページ
│   │   │   ├── strength/                            # つよさページ
│   │   │   ├── title/                               # 称号ページ
│   │   │   ├── DashboardLayout.module.css           # ダッシュボード（Route Groups）用CSS Modules
│   │   │   └── layout.tsx                           # ダッシュボード（Route Groups）用レイアウトコンポーネント
│   │   ├── api/                                     # API Routes
│   │   │   ├── user/                                # ユーザー関連API
│   │   │   ├── webhooks/                            # Webhook
│   │   │   └── zenn/                                # Zenn連携API
│   │   ├── favicon.ico                              # ファビコン
│   │   ├── Home.module.css                          # トップページ用CSS Modules
│   │   ├── layout.tsx                               # アプリケーション全体のルートレイアウトコンポーネント
│   │   ├── page.tsx                                 # ルートページ（トップページ）
│   │   ├── robots.ts                                # 検索エンジン向けrobots.txt生成
│   │   └── sitemap.ts                               # サイトマップ生成ファイル
│   ├── components/                                  # 再利用可能なUIコンポーネント
│   │   ├── auth/                                    # 認証関連コンポーネント
│   │   ├── common/                                  # 共通コンポーネント
│   │   ├── elements/                                # 基本的なUI要素
│   │   ├── layout/                                  # レイアウトコンポーネント
│   │   └── ui/                                      # shadcn/ui コンポーネント
│   ├── config/                                      # 設定ファイル・定数定義
│   ├── contexts/                                    # React Context・グローバル状態管理
│   ├── features/                                    # componentsでは共通化が難しい、特定の機能やドメイン固有のコンポーネントを管理するディレクトリ
│   │   ├── about/                                   # アバウトページ機能
│   │   ├── connection/                              # 接続機能
│   │   ├── dashboard/                               # ダッシュボード機能
│   │   ├── equipment/                               # 装備機能
│   │   ├── equipmentDetail/                         # 装備詳細機能
│   │   ├── home/                                    # ホームページ機能
│   │   ├── itemDetail/                              # アイテム詳細機能
│   │   ├── items/                                   # アイテム機能
│   │   ├── logs/                                    # ログ機能
│   │   ├── navigation/                              # ナビゲーション機能
│   │   ├── party/                                   # なかま機能
│   │   ├── partyMember/                             # なかま詳細機能
│   │   ├── posts/                                   # 投稿機能
│   │   ├── strength/                                # つよさ機能
│   │   └── title/                                   # 称号機能
│   ├── generated/                                   # Prisma Clientなど自動生成されるファイル
│   ├── hooks/                                       # カスタムフック
│   ├── lib/                                         # ライブラリ・ユーティリティ
│   ├── shared/                                      # 共有データ
│   ├── styles/                                      # スタイルファイル
│   ├── types/                                       # TypeScript型定義
│   ├── utils/                                       # ユーティリティ関数
│   └── middleware.ts                                # ミドルウェア
├── .env                                             # 環境変数の設定ファイル
├── .env.example                                     # 環境変数のテンプレートファイル
├── .gitignore                                       # GitHubの差分に含まないものを格納
├── .npmrc                                           # pnpmの設定ファイル
├── .prettierrc.json                                 # Prettierの設定ファイル
├── components.json                                  # shadcn/ui設定ファイル
├── eslint.config.mjs                                # ESLint設定ファイル
├── next.config.ts                                   # Next.js設定ファイル
├── package.json                                     # プロジェクトの依存関係・スクリプト定義
├── pnpm-lock.yaml                                   # pnpmの依存関係ロックファイル
├── postcss.config.mjs                               # PostCSS設定ファイル
├── README.md                                        # プロジェクトの説明ドキュメント
└── tsconfig.json                                    # TypeScript設定ファイル
```

<h2 id="environment-setup-procedure">環境構築の手順</h2>

### 前提条件

- Node.js 20 以上
- pnpm
- Git

### 1. リポジトリのクローン

```bash
git clone https://github.com/aoyamadev/output-quest.git
cd output-quest
```

### 2. パッケージのインストール

```bash
$ pnpm install
```

### 3. 環境変数の設定

```bash
# `.env.example`を参考に`.env`ファイルを作成し、必要な環境変数を設定してください。
$ cp .env.example .env
```

### 4. データベースのセットアップ

```bash
# Prismaクライアントの生成
npx prisma generate

# マイグレーションの実行
npx prisma migrate dev
```

### 5. 開発サーバーの起動（ローカル環境の立ち上げ）

```bash
$ pnpm dev
```

下記のローカル環境にアクセスして、アプリケーションの起動が確認できれば OK です。<br>
http://localhost:3000/<br>

<h2 id="project-overview">プロジェクト概要</h2>

私が開発したWebアプリです。RPG風のゲーミフィケーションを取り入れた「新感覚学習RPG」で、Zennで記事を投稿することでアプリ内の「勇者」が成長し、アイテムの入手、称号の獲得、仲間との出会いがあなたを待っています。アウトプットを通じて学習意欲や知的好奇心を高め、楽しみながら自己成長を促すことを目的に開発しました。

Next.js + CSS Modules + Tailwind CSS + TypeScriptで開発し、デプロイはVercelで行いました。

<h2 id="feature-introduction">機能紹介</h2>

### **トップページ**

ゲームのオープニングを彷彿とさせる演出により、冒険のはじまりを視覚的に表現しました。

![トップページ](/public/gif/README/top-page.gif)

### **アバウトページ**

アプリの概要、コンセプト、主要機能について紹介しています。

![アバウトページ](/public/gif/README/about-page.gif)

### **ログインページ**

Clerk認証によるログイン、Zennのアカウント連携を行ったユーザーのみがアプリを利用できるようにしています。Zennと連携することで、投稿データがアプリ内のUIに反映されます。

![ログインページ](/public/gif/README/login-page.gif)

### **ダッシュボードページ**

勇者の成長度合いを示すレベル、Zennでの投稿数、勇者の仲間に加わったキャラや入手したアイテムを確認できます。

![ダッシュボードページ](/public/gif/README/dashboard-page.gif)

### **投稿一覧ページ**

Zennで投稿した全ての記事を取得し、アプリ内で「投稿一覧」として確認できます。取得した記事がアプリ内ではカード型UIで表示され、クリックすることでZennの記事ページにアクセスできます。

![投稿リストページ](/public/gif/README/posts-page.gif)

### **つよさページ**

勇者の成長度合いを示すレベル、レベルアップ報酬で獲得した「称号」の確認、勇者の「装備アイテム」の確認、学びの記録を時系列で確認できる「冒険ログ」の確認ができます。

![つよさページ](/public/gif/README/strength-page.gif)

### **なかまページ**

勇者の仲間になったキャラクターを確認できます。1人1人のキャラクターの詳細情報も確認できます。

![なかまページ](/public/gif/README/party-page.gif)

### **アイテムページ**

レベルアップ報酬で入手したアイテムを確認できます。1つ1つのアイテムの詳細情報も確認できます。

![アイテムページ](/public/gif/README/items-page.gif)

<h2 id="how-to-use">アプリの使用方法</h2>

```bash
# 1. Clerkによるログイン
/connectionページにて、ログインを実行。

# 2. Zennのアカウントと連携
Clerkによるログイン完了後、連携するZennアカウントのユーザー名を入力して、連携。

# 3. 冒険をはじめよう！
ClerkによるログインとZennアカウントの連携が完了したら、早速冒険をはじめよう！
```
