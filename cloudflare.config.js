// Cloudflare Pages 配置文件

/**
 * Cloudflare Pages 构建和部署配置
 * 此配置文件可用于 Cloudflare CLI (wrangler) 部署
 */

const config = {
  // 项目名称
  projectName: 'factoriolab-update',
  
  // 构建输出目录
  buildOutputDirectory: 'dist/browser',
  
  // 构建命令
  buildCommand: 'npm run build -- -c=production',
  
  // 环境变量
  env: {
    // 生产环境变量
    production: {
      NODE_ENV: 'production',
      NG_CLI_ANALYTICS: 'false'
    }
  },
  
  // 路由配置（已在 _redirects 文件中定义）
  // Cloudflare Pages 会自动读取项目根目录下的 _redirects 文件
  
  // 分支配置
  branch: 'main'
};

module.exports = config;