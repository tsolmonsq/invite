import { PrimaryButton } from "@/components/CustomButton";
import Image from "next/image";

// Home page-ийн үндсэн компонент
export default function Home() {
  return (
    <main>
      <section
        className="hero h-[500px] bg-cover bg-center flex flex-col items-center justify-end pb-16 gap-12"
        style={{
          backgroundImage: "url('images/hero_background.png'), linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.7))",
        }}
      >
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">Цахим урилга илгээх үйлчилгээ</h1>
        <PrimaryButton text="ЭВЕНТ ҮҮСГЭХ"/> {/* Эвент үүсгэх товч */}
      </section>

        {/* Танилцуулга болон асуулт, хариулт агуулсан хэсэг */}
      <div className="flex flex-col items-start w-full max-w-3xl mx-auto py-8 gap-16 px-8">
        <section className="w-full flex flex-col gap-8">

          {/* Танилцуулга болон давуу тал агуулсан хэсэг */}
          <h2 className="text-myPrimary text-center text-2xl md:text-3xl lg:text-3xl font-bold">Цахим урилга илгээх боломж</h2>

          {/* Танилцуулгын хэсэг */}
          <article className="flex flex-row justify-between items-start">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl md:text-2xl lg:text-2xl">Шийдэл</h3>
              <p>Invite нь арга хэмжээ зохион байгуулагчид, хувь хүмүүс, арга хэмжээ зохион байгуулж буй байгууллагуудад зориулагдсан урилга, бүртгэлийн нэгдсэн систем юм.</p>
            </div>
            <Image
              src="/images/art_img.png"
              alt="Logo"
              width={160}
              height={160}
              className="flex-shrink-0"
            />
          </article>

          {/* Давуу тал агуулсан хэсэг */}
          <article className="flex flex-row justify-between items-start">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-xl md:text-2xl lg:text-2xl">Давуу талууд</h3>
              <ul className="list-disc pl-5">
                <li>
                  Зочин ирэх эсэхээ мэдэгдэнэ
                </li>
                <li>
                  Хялбар урилга илгээх
                </li>
                <li>
                  Байгальд ээлтэй
                </li>
              </ul>
            </div>
            <Image
              src="/images/art_img.png"
              alt="Logo"
              width={160}
              height={160}
              className="flex-shrink-0"
            />
          </article>
        </section>

        {/* Асуулт хариултын хэсэг */}
        <section className="w-full flex flex-col gap-4">
          <h2 className="text-myPrimary text-center text-2xl md:text-3xl lg:text-3xl font-bold mb-4">Түгээмэл асуултууд</h2>
          <details className="group">
            <summary className="custom-summary">
              Invite-ийн тухай
              <span className="summary-span">&#10095;</span>
              </summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure non sit voluptatem quaerat minus repudiandae eveniet impedit perferendis alias harum?</p>
          </details>
          <details className="group">
            <summary className="custom-summary">
              Хэн ашиглах боломжтой вэ?
              <span className="summary-span">&#10095;</span>
              </summary>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, quaerat ratione? Consequatur aliquam quis quas doloribus ab culpa magnam aperiam!</p>
          </details>
          <details className="group">
            <summary className="custom-summary">
              Зочин миний арга хэмжээнд ИРНЭ/ИРЭХГҮЙ -гээ хариулсаныг би яаж мэдэх вэ?
              <span className="summary-span">&#10095;</span>
              </summary>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit magni et dignissimos accusantium laudantium cum neque facere repudiandae, dolorum sapiente error nostrum quaerat exercitationem voluptate quisquam quia beatae aperiam tempore.</p>
          </details>
          <details className="group">
            <summary className="custom-summary">
              Би зочдыг олноор нь урьж болох уу?
              <span className="summary-span">&#10095;</span>
              </summary>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis autem et ipsum iste cum vel quidem numquam atque beatae pariatur natus earum totam nihil id in, omnis error deserunt facilis!</p>
          </details>
        </section>
      </div>
    </main>
  );
}
