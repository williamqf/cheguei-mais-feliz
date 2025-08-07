import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import babyMascot from "@/assets/baby-mascot.jpg";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria a integração com autenticação (Clerk/Supabase)
    console.log("Form submitted:", formData);
    // Redirecionar para dashboard após login/registro
    window.location.href = "/dashboard";
  };

  const handleGoogleLogin = () => {
    // Integração com Google OAuth
    console.log("Google login clicked");
    // Redirecionar para dashboard após login
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo e Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
            <img 
              src={babyMascot} 
              alt="Cheguei Família - Mascote bebê" 
              className="w-12 h-12 rounded-full group-hover:scale-110 transition-transform"
            />
            <span className="text-2xl font-bold text-primary">Cheguei Família</span>
          </Link>
          
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {isLogin ? "Bem-vindo de volta!" : "Vamos começar!"}
          </h1>
          <p className="text-muted-foreground">
            {isLogin 
              ? "Entre na sua conta para continuar" 
              : "Crie sua conta e organize seu chá de bebê"
            }
          </p>
        </div>

        {/* Card do formulário */}
        <div className="card-floating">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome (apenas no registro) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome completo
                </label>
                <div className="relative">
                  <Baby className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl 
                      focus:ring-2 focus:ring-primary focus:border-transparent
                      bg-background text-foreground placeholder-muted-foreground
                      transition-all duration-200"
                    placeholder="Seu nome"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-xl 
                    focus:ring-2 focus:ring-primary focus:border-transparent
                    bg-background text-foreground placeholder-muted-foreground
                    transition-all duration-200"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border border-border rounded-xl 
                    focus:ring-2 focus:ring-primary focus:border-transparent
                    bg-background text-foreground placeholder-muted-foreground
                    transition-all duration-200"
                  placeholder="Sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 
                    text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Botão principal */}
            <button type="submit" className="btn-hero w-full group">
              {isLogin ? "Entrar" : "Criar conta"}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">ou</span>
              </div>
            </div>

            {/* Login com Google */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 
                border border-border rounded-xl hover:bg-neutral/50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar com Google
            </button>
          </form>

          {/* Toggle entre login/registro */}
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary hover:underline font-medium"
              >
                {isLogin ? "Criar conta" : "Fazer login"}
              </button>
            </p>
          </div>

          {/* Link para voltar */}
          <div className="mt-4 text-center">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Voltar para início
            </Link>
          </div>
        </div>

        {/* Texto de segurança */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          ✅ Seus dados estão seguros • ✅ 100% gratuito • ✅ Sem spam
        </div>
      </div>
    </div>
  );
};

export default LoginPage;