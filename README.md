# 🌲 TreeQuest Parallel Processing

A native pi extension for **parallel AI processing** - integrates [TreeQuest Orchestrator](https://github.com/subho/treequest) for multi-provider parallel queries, smart routing, and multi-agent coordination.

## ✨ Features

- **Parallel Execution**: Run multiple AI queries simultaneously across providers
- **Smart Routing**: Automatically select optimal provider based on task type
- **Multi-Agent Ensemble**: Compare responses from multiple agents
- **Health Monitoring**: Real-time provider and agent status
- **Cost Tracking**: Monitor API costs across providers

## 🚀 Installation

```bash
# From npm (when published)
pi install npm:@your-name/pi-treequest-parallel-processing

# From git
pi install git:github.com/your-org/pi-treequest-parallel-processing@v1.0.0
```

## 📖 Usage

### Commands

| Command | Description |
|---------|-------------|
| `/tq-status` | Show TreeQuest status |
| `/tq-providers` | List AI providers |
| `/tq-agents` | List CLI agents |
| `/tq-health` | Test provider health |
| `/tq-help` | Show help |

### Tools

| Tool | Description |
|------|-------------|
| `treequest_parallel` | Run multiple queries in parallel |
| `treequest_route` | Route single query optimally |
| `treequest_status` | Get system status |
| `treequest_health` | Test health |
| `treequest_ensemble` | Multi-agent comparison |

## 🔧 Configuration

TreeQuest requires API keys for various providers. Set them as environment variables:

```bash
export GROQ_API_KEY=your_key
export MISTRAL_API_KEY=your_key
export ANTHROPIC_API_KEY=your_key
# etc.
```

## 📊 Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     TreeQuest Orchestrator                  │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│  │  Groq   │  │ Mistral │  │ Claude  │  │ Together │      │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘       │
│       │            │            │            │              │
│       └────────────┼────────────┼────────────┘              │
│                    ▼                                     │
│         ┌──────────────────────┐                          │
│         │  Parallel Processing │                          │
│         │     & Smart Routing   │                          │
│         └──────────────────────┘                          │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                    ┌───────────────┐
                    │  pi Extension  │
                    └───────────────┘
```

## 📝 Example

```typescript
// Run 3 queries in parallel
await treequest_parallel({
  tasks: [
    "What is quantum computing?",
    "Explain photosynthesis",
    "Define machine learning"
  ],
  strategy: "balanced"
});
```

## 📜 License

MIT