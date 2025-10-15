import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-primary">Wedding Host</h1>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">Обо мне</button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection("portfolio")} className="text-sm font-medium hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection("reviews")} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
              <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-white">Связаться</Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-pink-50 via-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Сделаю вашу свадьбу <span className="text-primary">незабываемой</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Авторский стиль проведения, индивидуальный подход к каждой паре. Более 200 счастливых пар доверили мне самый важный день в их жизни.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-white/50 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">200+</div>
                  <div className="text-sm text-muted-foreground">Свадеб проведено</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">8 лет</div>
                  <div className="text-sm text-muted-foreground">Опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Счастливых пар</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection("services")} className="bg-primary hover:bg-primary/90 text-white">
                  Выбрать пакет
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("portfolio")}>
                  Смотреть портфолио
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/98910347-67e3-47c4-ad1e-e0a1e41964b9/files/60b7fbe6-f871-44e0-b07a-bb8bd475f3fc.jpg" 
                alt="Wedding celebration" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Обо мне</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Профессиональный ведущий свадеб с 8-летним опытом. Моя миссия — создавать атмосферу, в которой каждая пара чувствует себя особенной.
            </p>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl text-left">
              <h3 className="text-xl font-semibold mb-4 text-center">Почему выбирают меня:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-muted-foreground">Разработка уникального сценария под вашу историю любви и характер</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-muted-foreground">Работаю без шаблонов — каждая свадьба не похожа на другую</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-muted-foreground">Умею вовлечь даже самых застенчивых гостей в веселье</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-muted-foreground">Координирую всех подрядчиков, чтобы вы могли расслабиться</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-fade-in hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Heart" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-center">Индивидуальный подход</h3>
                <p className="text-muted-foreground text-center mb-3">
                  Разрабатываю уникальный сценарий для каждой пары с учётом их пожеланий, характера и истории знакомства
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Предварительные встречи</li>
                  <li>• Учёт всех пожеланий</li>
                  <li>• Персональные сюрпризы</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Sparkles" className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-center">Авторский стиль</h3>
                <p className="text-muted-foreground text-center mb-3">
                  Сочетание классических традиций с современными трендами в проведении свадеб
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Без пошлых конкурсов</li>
                  <li>• Стильные активности</li>
                  <li>• Актуальные форматы</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-center">Опыт и профессионализм</h3>
                <p className="text-muted-foreground text-center mb-3">
                  Более 200 проведённых свадеб, множество благодарных отзывов и счастливых воспоминаний
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 8 лет на рынке</li>
                  <li>• Свадьбы от 20 до 500 гостей</li>
                  <li>• Работа по всей России</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Пакеты услуг</h2>
            <p className="text-lg text-muted-foreground">
              Выберите пакет, который идеально подходит для вашей свадьбы. Все пакеты можно дополнить и адаптировать под ваши пожелания.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all hover:scale-105 duration-300">
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">Базовый</h3>
                  <div className="text-4xl font-bold text-primary mb-2">от 30 000₽</div>
                  <p className="text-muted-foreground">До 6 часов</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Проведение свадебного банкета (до 6 часов)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>5-7 классических конкурсов и игр</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Знакомство гостей, тосты, речи</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Координация с площадкой и диджеем</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Одна предварительная встреча (1,5 часа)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Разработка базового сценария</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Связь по телефону 24/7 за неделю до свадьбы</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white" onClick={() => scrollToSection("contact")}>
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-105 duration-300 border-primary border-2 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">Популярный</span>
              </div>
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">Стандарт</h3>
                  <div className="text-4xl font-bold text-primary mb-2">от 50 000₽</div>
                  <p className="text-muted-foreground">До 8 часов</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Всё из базового пакета</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Проведение банкета до 8 часов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>10-12 авторских активностей и игр</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Индивидуальный сценарий под вашу историю</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Две встречи для подготовки (3-4 часа)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Координация всех подрядчиков</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Профессиональное оборудование (микрофон, колонки)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Репетиция первого танца (по желанию)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Подбор музыкального сопровождения</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-primary hover:bg-primary/90 text-white" onClick={() => scrollToSection("contact")}>
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all hover:scale-105 duration-300">
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">Премиум</h3>
                  <div className="text-4xl font-bold text-primary mb-2">от 80 000₽</div>
                  <p className="text-muted-foreground">Весь день</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Всё из стандартного пакета</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Проведение всего дня (без ограничений)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Выездная регистрация + банкет</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Неограниченное количество встреч</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Полная координация всего свадебного дня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Эксклюзивные персонализированные сюрпризы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Помощь в подготовке клятв и речей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Создание таймлайна и плана дня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Консультации по выбору площадки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Профессиональный реквизит для игр</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white" onClick={() => scrollToSection("contact")}>
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Портфолио</h2>
            <p className="text-lg text-muted-foreground">
              Каждая свадьба уникальна. Посмотрите на моменты, которые я помог создать для других пар.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/98910347-67e3-47c4-ad1e-e0a1e41964b9/files/60b7fbe6-f871-44e0-b07a-bb8bd475f3fc.jpg" 
                alt="Wedding 1" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-serif font-bold mb-2">Анна и Дмитрий</h3>
                  <p className="text-sm">Классическая свадьба • 150 гостей</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/98910347-67e3-47c4-ad1e-e0a1e41964b9/files/c4842c93-5d5a-4509-94be-2a3ed7354309.jpg" 
                alt="Wedding 2" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-serif font-bold mb-2">Мария и Александр</h3>
                  <p className="text-sm">Камерная свадьба • 50 гостей</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/98910347-67e3-47c4-ad1e-e0a1e41964b9/files/60b7fbe6-f871-44e0-b07a-bb8bd475f3fc.jpg" 
                alt="Wedding 3" 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-serif font-bold mb-2">Екатерина и Сергей</h3>
                  <p className="text-sm">Выездная церемония • 80 гостей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6">Отзывы</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят пары, доверившие мне свой особенный день
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-secondary fill-secondary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Невероятный профессионал! Наша свадьба прошла идеально благодаря его умению чувствовать атмосферу и вовлекать гостей. Все были в восторге!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                    АМ
                  </div>
                  <div>
                    <p className="font-semibold">Анна и Михаил</p>
                    <p className="text-sm text-muted-foreground">Июнь 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-secondary fill-secondary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Индивидуальный подход — это не просто слова. Он учёл все наши пожелания и создал программу, которая была именно нашей. Спасибо!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                    ЕД
                  </div>
                  <div>
                    <p className="font-semibold">Елена и Дмитрий</p>
                    <p className="text-sm text-muted-foreground">Сентябрь 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-secondary fill-secondary" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Лучший ведущий! Профессионал с большой буквы. Гости до сих пор вспоминают нашу свадьбу и спрашивают контакты ведущего."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-primary">
                    ОА
                  </div>
                  <div>
                    <p className="font-semibold">Ольга и Андрей</p>
                    <p className="text-sm text-muted-foreground">Август 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6">Вопросы и ответы</h2>
              <p className="text-lg text-muted-foreground">
                Ответы на часто задаваемые вопросы о моих услугах
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  За сколько времени нужно бронировать дату?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Рекомендую бронировать дату минимум за 3-6 месяцев, особенно если планируете свадьбу в высокий сезон (май-сентябрь). В этот период у меня может быть забронировано до 15-20 свадеб в месяц. Однако могу принять заказ и с меньшим сроком, если есть свободные даты. Для бронирования вносится предоплата 50%.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Можно ли изменить программу под наши пожелания?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Конечно! Каждая свадьба уникальна, и я создаю индивидуальный сценарий под каждую пару. Мы встретимся, обсудим ваши предпочтения, характер, историю знакомства, и я адаптирую программу специально для вас. Можем убрать определённые конкурсы, добавить новые активности, изменить формат — всё под вас.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Что входит в стоимость пакета?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  В стоимость включены: проведение банкета по индивидуальному сценарию, все конкурсы и активности, координация с площадкой и подрядчиками, предварительные встречи, профессиональное оборудование (в Стандарт и Премиум), консультации по телефону. Дополнительно можно заказать: спецэффекты, артистов, дополнительное время.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Работаете ли вы в других городах?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, я готов работать в других городах России. Уже проводил свадьбы в Москве, Санкт-Петербурге, Сочи, Казани и других городах. К стоимости добавляются транспортные расходы и проживание (если требуется). Обычно это +10 000-15 000₽ к выбранному пакету.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold">
                  Какая форма оплаты?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Оплата производится в два этапа: 50% предоплата при бронировании даты (закрепляет вашу дату за вами) и 50% за 7 дней до мероприятия. Принимаю наличные, перевод на карту и безналичный расчёт по договору (с чеком и актом).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6">Свяжитесь со мной</h2>
              <p className="text-lg text-muted-foreground">
                Готов обсудить вашу свадьбу и ответить на все вопросы
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                        <Input 
                          placeholder="Как вас зовут?" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email или телефон</label>
                        <Input 
                          placeholder="Как с вами связаться?" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Сообщение</label>
                        <Textarea 
                          placeholder="Расскажите о вашей свадьбе..." 
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                        Отправить заявку
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">host@wedding.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Instagram" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <p className="text-muted-foreground">@wedding_host</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telegram</h3>
                    <p className="text-muted-foreground">@wedding_host</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Wedding Host</h3>
              <p className="text-white/70">
                Профессиональное проведение свадеб с индивидуальным подходом к каждой паре
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection("home")} className="block text-white/70 hover:text-white transition-colors">Главная</button>
                <button onClick={() => scrollToSection("services")} className="block text-white/70 hover:text-white transition-colors">Услуги</button>
                <button onClick={() => scrollToSection("portfolio")} className="block text-white/70 hover:text-white transition-colors">Портфолио</button>
                <button onClick={() => scrollToSection("reviews")} className="block text-white/70 hover:text-white transition-colors">Отзывы</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p>+7 (999) 123-45-67</p>
                <p>host@wedding.ru</p>
                <p>@wedding_host</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2024 Wedding Host. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;