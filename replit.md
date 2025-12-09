# OpenAI ChatKit Starter App

## Overview
This is a Next.js application that integrates with OpenAI's ChatKit web component to provide an AI-powered chat interface. The app uses OpenAI's Agent Builder workflows to create interactive chat experiences.

**Current Status**: Successfully configured and running in Replit environment on port 5000.

## Recent Changes (Dec 2, 2025)
- Configured Next.js to run on port 5000 with host 0.0.0.0 for Replit compatibility
- Set up workflow to run the development server with webview output
- Configured environment variables for OpenAI API key and workflow ID
- Set up deployment configuration for autoscale deployment
- All dependencies installed via npm

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15.5.4 (React 19.2.0)
- **UI Library**: OpenAI ChatKit (web component)
- **Styling**: TailwindCSS 4.x
- **Language**: TypeScript 5.x
- **Runtime**: Node.js (Edge runtime for API routes)

### Project Structure
```
├── app/
│   ├── api/
│   │   └── create-session/     # API endpoint for ChatKit session creation
│   │       └── route.ts
│   ├── App.tsx                  # Main app component with ChatKit integration
│   ├── layout.tsx               # Root layout with ChatKit script loader
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/
│   ├── ChatKitPanel.tsx         # ChatKit web component wrapper
│   └── ErrorOverlay.tsx         # Error display component
├── hooks/
│   └── useColorScheme.ts        # Theme management hook
├── lib/
│   └── config.ts                # App configuration (prompts, theme, workflow ID)
└── public/
    └── docs/                    # Documentation assets
```

### Key Features
- OpenAI ChatKit web component integration
- Session management with cookie-based user tracking
- Theme switching (light/dark mode)
- Custom starter prompts
- File upload support
- Client-side tool handling (theme switching, fact recording)

## Environment Variables

### Required Secrets (in Replit Secrets)
- `OPENAI_API_KEY` - Your OpenAI API key (must be from same org/project as Agent Builder)

### Required Environment Variables (in Replit Environment)
- `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` - Your ChatKit workflow ID (starts with "wf_...")

**Important**: To use this app, you need to:
1. Get your workflow ID from [Agent Builder](https://platform.openai.com/agent-builder) after clicking "Publish"
2. Update the `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` environment variable with your actual workflow ID (currently set to placeholder value)

### Optional Environment Variables
- `CHATKIT_API_BASE` - Custom base URL for ChatKit API (defaults to https://api.openai.com)

## Development

### Running Locally
The app is configured to run on port 5000 (required for Replit webview):
```bash
npm run dev
```

Access at: http://0.0.0.0:5000 (or use Replit's webview)

### Building for Production
```bash
npm run build
npm start
```

## Deployment

The app is configured for **autoscale deployment** in Replit:
- Build command: `npm run build`
- Run command: `npm start`
- The app will automatically scale based on traffic

**Before deploying**:
1. Make sure `NEXT_PUBLIC_CHATKIT_WORKFLOW_ID` is set to your actual workflow ID
2. Verify your domain is added to the [Domain allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)
3. If using GPT-5 or similar models, verify your organization at [organization settings](https://platform.openai.com/settings/organization/general)

## Customization

### Update Starter Prompts
Edit `lib/config.ts` to modify:
- `STARTER_PROMPTS` - Initial prompt suggestions
- `GREETING` - Welcome message
- `PLACEHOLDER_INPUT` - Input field placeholder text

### Update Theme
Edit `getThemeConfig()` in `lib/config.ts` to customize:
- Color scheme (grayscale hue, accent colors)
- Border radius
- Other theme options (see [ChatKit Playground](https://chatkit.studio/playground))

### Event Handlers
Edit `components/ChatKitPanel.tsx` to add custom logic for:
- `onWidgetAction` - Handle custom client-side tools
- `onResponseEnd` - Track when responses complete
- `onThemeRequest` - Handle theme change requests

## Important Notes

### Port Configuration
- Development server runs on port 5000 (configured for Replit webview)
- Production server also runs on port 5000
- **Do not change the port** - it's required for Replit's webview functionality

### API Key Security
- The OpenAI API key is stored in Replit Secrets and never exposed to the client
- Session creation happens server-side via the `/api/create-session` endpoint
- Client receives only a session client secret, not the API key

### Workflow ID
- The workflow ID is a public variable (NEXT_PUBLIC_*) and is exposed to the client
- It's safe to include in client-side code as it's not sensitive
- You must replace the placeholder value with your actual workflow ID for the app to function

## Troubleshooting

### "Missing OPENAI_API_KEY" Error
Make sure the OPENAI_API_KEY is added to Replit Secrets (not environment variables)

### "Set NEXT_PUBLIC_CHATKIT_WORKFLOW_ID" Error
Update the environment variable with your actual workflow ID from Agent Builder

### Domain Verification Error
Add your deployment domain to the OpenAI [Domain allowlist](https://platform.openai.com/settings/organization/security/domain-allowlist)

## References
- [ChatKit JavaScript Library](http://openai.github.io/chatkit-js/)
- [OpenAI Agent Builder](https://platform.openai.com/agent-builder)
- [ChatKit Playground](https://chatkit.studio/playground)
- [Advanced Self-Hosting Examples](https://github.com/openai/openai-chatkit-advanced-samples)
