/**
 * TreeQuest Parallel Processing - Pi Commands Extension
 * 
 * This extension provides additional commands for TreeQuest Parallel Processing.
 * Tools are provided by the core treequest-parallel extension.
 * 
 * Available Commands:
 *   /tq-status          - Show TreeQuest status
 *   /tq-providers       - List AI providers
 *   /tq-agents          - List CLI agents
 *   /tq-health          - Test provider health
 *   /tq-help            - Show help
 *   /tq-parallel        - Run parallel queries
 *   /tq-route           - Route single query
 *   /tq-ensemble        - Multi-agent comparison
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function treequestCommandsExtension(pi: ExtensionAPI): void {
  
  // =========================================================================
  // Session Start - Notify user
  // =========================================================================
  
  pi.on("session_start", async (_event, ctx) => {
    ctx.ui.notify("TreeQuest Parallel Processing ready - /tq-help for commands", "info");
  });

  // =========================================================================
  // Command: /tq-status
  // =========================================================================
  
  pi.registerCommand("tq-status", {
    description: "Show TreeQuest Parallel Processing status - providers, agents, costs",
    async handler(_args, ctx) {
      // Use the tool from treequest-parallel extension
      await ctx.sendUserMessage(`📊 Querying TreeQuest status...`);
      
      // Send tool call
      await ctx.sendUserMessage(`Use treequest_status with no arguments`);
    }
  });

  // =========================================================================
  // Command: /tq-providers
  // =========================================================================
  
  pi.registerCommand("tq-providers", {
    description: "List all available AI providers in TreeQuest Parallel Processing",
    async handler(_args, ctx) {
      await ctx.sendUserMessage(`Use treequest_list_providers with no arguments`);
    }
  });

  // =========================================================================
  // Command: /tq-agents
  // =========================================================================
  
  pi.registerCommand("tq-agents", {
    description: "List all available CLI agents with capabilities",
    async handler(_args, ctx) {
      await ctx.sendUserMessage(`🤖 Querying available agents...`);
      await ctx.sendUserMessage(`Use treequest_status with no arguments`);
    }
  });

  // =========================================================================
  // Command: /tq-health
  // =========================================================================
  
  pi.registerCommand("tq-health", {
    description: "Test TreeQuest Parallel Processing provider and agent health",
    async handler(_args, ctx) {
      ctx.ui.notify("Running health checks...", "info");
      await ctx.sendUserMessage(`Use treequest_health with target: "all"`);
    }
  });

  // =========================================================================
  // Command: /tq-help
  // =========================================================================
  
  pi.registerCommand("tq-help", {
    description: "Show TreeQuest Parallel Processing help and usage examples",
    async handler(_args, ctx) {
      await ctx.sendUserMessage(`# 🌲 TreeQuest Parallel Processing

## Available Commands
| Command | Description |
|---------|-------------|
| \`/tq-status\` | Show TreeQuest status |
| \`/tq-providers\` | List AI providers |
| \`/tq-agents\` | List CLI agents |
| \`/tq-health\` | Test provider health |
| \`/tq-help\` | Show this help |

## Available Tools (via treequest-parallel)
| Tool | Description |
|------|-------------|
| \`treequest_parallel\` | Run multiple queries in parallel |
| \`treequest_route\` | Route single query optimally |
| \`treequest_status\` | Get system status |
| \`treequest_health\` | Test health |
| \`treequest_ensemble\` | Multi-agent comparison |
| \`treequest_list_providers\` | List providers |

## Examples

### Run Parallel Queries
Use treequest_parallel with:
\`\`\`json
{
  "tasks": ["What is AI?", "Explain ML", "Define DL"],
  "strategy": "balanced"
}
\`\`\`

### Route Single Query
Use treequest_route with:
\`\`\`json
{
  "prompt": "Write a Python function for fibonacci",
  "priority": "speed"
}
\`\`\`

### Multi-Agent Ensemble
Use treequest_ensemble with:
\`\`\`json
{
  "prompt": "Review this code for bugs",
  "agents": ["claude", "codex"]
}
\`\`\`

## Supported Providers
- 🟢 Groq (140ms) - Fast inference
- 🟢 Mistral AI (310ms) - Quality balanced
- 🟢 Anthropic Claude (2200ms) - Premium reasoning
- 🟢 Together AI (500ms) - Open models
- 🟢 Cerebras (380ms) - Fast NLA
- 🟢 GLM (620ms) - Chinese models
- 🟢 NVIDIA (450ms) - Enterprise
`);
    }
  });

  // =========================================================================
  // Command: /tq-parallel
  // =========================================================================
  
  pi.registerCommand("tq-parallel", {
    description: "Run multiple queries in parallel via TreeQuest",
    async handler(args, ctx) {
      if (!args || args.trim() === '') {
        await ctx.sendUserMessage(`📝 Usage: /tq-parallel <task1> | <task2> | <task3>...

Example:
  /tq-parallel What is AI? | Explain ML | Define DL

This will run all tasks in parallel across available providers.`);
        return;
      }
      
      const tasks = args.split('|').map(t => t.trim()).filter(t => t.length > 0);
      
      if (tasks.length === 0) {
        ctx.ui.notify("No tasks specified", "error");
        return;
      }
      
      ctx.ui.notify(`Running ${tasks.length} tasks in parallel...`, "info");
      
      // Build JSON for tool call
      const toolCall = `Use treequest_parallel with tasks: ${JSON.stringify(tasks)}, strategy: "balanced"`;
      await ctx.sendUserMessage(toolCall);
    },
    getArgumentCompletions: (prefix: string) => {
      // Suggest pipe separator for multiple tasks
      if (prefix === '') {
        return [
          { value: 'Task 1 | Task 2', label: 'Two tasks' },
          { value: 'Task 1 | Task 2 | Task 3', label: 'Three tasks' }
        ];
      }
      return null;
    }
  });

  // =========================================================================
  // Command: /tq-route
  // =========================================================================
  
  pi.registerCommand("tq-route", {
    description: "Route a single query to optimal provider",
    async handler(args, ctx) {
      if (!args || args.trim() === '') {
        await ctx.sendUserMessage(`📝 Usage: /tq-route <prompt>

Example:
  /tq-route Write a Python function for sorting

TreeQuest will automatically select the best provider for your query.`);
        return;
      }
      
      ctx.ui.notify("Routing query...", "info");
      await ctx.sendUserMessage(`Use treequest_route with prompt: "${args.replace(/"/g, '\\"')}"`);
    }
  });

  // =========================================================================
  // Command: /tq-ensemble
  // =========================================================================
  
  pi.registerCommand("tq-ensemble", {
    description: "Run query across multiple agents for comparison",
    async handler(args, ctx) {
      if (!args || args.trim() === '') {
        await ctx.sendUserMessage(`📝 Usage: /tq-ensemble <prompt>

Example:
  /tq-ensemble Review this code for security issues

This runs your query across multiple agents and compares their responses.`);
        return;
      }
      
      ctx.ui.notify("Running multi-agent ensemble...", "info");
      await ctx.sendUserMessage(`Use treequest_ensemble with prompt: "${args.replace(/"/g, '\\"')}"`);
    }
  });

  // =========================================================================
  // Event: Log TreeQuest usage
  // =========================================================================
  
  pi.on("tool_result", async (event, _ctx) => {
    if (event.toolName.startsWith("treequest_")) {
      console.log(`[TreeQuest Commands] Tool ${event.toolName} completed`);
    }
  });

  console.log("[TreeQuest Commands Extension] Loaded successfully");
}