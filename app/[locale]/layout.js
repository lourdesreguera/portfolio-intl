import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

// custom 
import { montserrat, leky } from "../fonts";

async function getMessages(locale) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body className={`${leky.variable} ${montserrat.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
