---
name: treequest-parallel-processing
description: TreeQuest Parallel Processing - multi-provider parallel AI orchestration. Use when running multiple AI queries in parallel, comparing provider responses, or selecting optimal AI provider for a task.
---

# 🌲 TreeQuest Parallel Processing

Multi-provider parallel AI execution for pi coding agent.

## ✨ What is TreeQuest Parallel Processing?

TreeQuest Parallel Processing enables running multiple AI queries **simultaneously** across different providers. It's designed for:
- Batch processing multiple queries
- Comparing responses from different AI providers
- Optimizing cost and speed through smart routing

## 🚀 Quick Start

```bash
# Check status
/treequest-status

# Run parallel queries
Use treequest_parallel with tasks: ["Query 1", "Query 2", "Query 3"]

# Route single query
Use treequest_route with prompt: "Your question here"
```

## 🌐 Available Providers

| Provider | Speed | Best For |
|----------|-------|----------|
| **Groq** | 140ms | Fast inference, coding |
| **Mistral AI** | 310ms | Quality balanced |
| **Anthropic Claude** | 2200ms | Premium reasoning |
| **Together AI** | 500ms | Open models |
| **Cerebras** | 380ms | Fast NLA |
| **GLM** | 620ms | Chinese models |
| **NVIDIA** | 450ms | Enterprise |

## 📋 Commands

| Command | Description |
|---------|-------------|
| `/tq-status` | System status |
| `/tq-providers` | List providers |
| `/tq-agents` | List agents |
| `/tq-health` | Health check |
| `/tq-help` | Help |

## 💡 Use Cases

1. **Parallel Research**: Run same query across multiple providers
2. **Cost Optimization**: Route to cheapest capable provider
3. **Quality Assurance**: Ensemble multiple responses
4. **Fallback Handling**: Automatic provider fallback
5. **Batch Processing**: Process multiple queries simultaneously

## 🔥 Examples

### Parallel Queries
```json
{
  "tasks": ["What is AI?", "Define ML", "Explain DL"],
  "strategy": "balanced"
}
```

### Smart Routing
```json
{
  "prompt": "Write a Python function",
  "priority": "speed"
}
```

### Multi-Agent Ensemble
```json
{
  "prompt": "Review this code",
  "agents": ["claude", "codex"]
}
```

## ⚙️ Configuration

Set API keys as environment variables:
```bash
export GROQ_API_KEY=your_key
export MISTRAL_API_KEY=your_key
```