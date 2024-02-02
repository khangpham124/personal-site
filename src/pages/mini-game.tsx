import { GetStaticProps } from 'next';
import Footer from '../components/Footer/Footer';
import Header from '@/components/Header/Header';

// let w = window.innerWidth;

const Wishlist = () => {
  // const t = useTranslations('CartWishlist');
  // const { addOne } = useCart();

  const shuffle = (array:any) => {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

  const spin = () => {
    // Play the sound
    // Inisialisasi variabel
    const box = document.getElementById("box") as any;
    const element = document.getElementById("mainbox");
    let SelectedItem = "";
  
    let MagicRoaster = shuffle([1890, 2250, 2610]);
    let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
    let RiceCooker = shuffle([1810, 2170, 2530]);
    let LunchBox = shuffle([1770, 2130, 2490]);
    let Sanken = shuffle([1750, 2110, 2470]);
    let Electrolux = shuffle([1630, 1990, 2350]);
    let JblSpeaker = shuffle([1570, 1930, 2290]);
  
    // Bentuk acak
    let Hasil = shuffle([
      MagicRoaster[0],
      Sepeda[0],
      RiceCooker[0],
      LunchBox[0],
      Sanken[0],
      Electrolux[0],
      JblSpeaker[0],
    ]);
    // console.log(Hasil[0]);
  
    // Ambil value item yang terpilih
    if (MagicRoaster.includes(Hasil[0])) SelectedItem = "Magic Roaster";
    if (Sepeda.includes(Hasil[0])) SelectedItem = "Sepeda Aviator";
    if (RiceCooker.includes(Hasil[0])) SelectedItem = "Rice Cooker Philips";
    if (LunchBox.includes(Hasil[0])) SelectedItem = "Lunch Box Lock&Lock";
    if (Sanken.includes(Hasil[0])) SelectedItem = "Air Cooler Sanken";
    if (Electrolux.includes(Hasil[0])) SelectedItem = "Electrolux Blender";
    if (JblSpeaker.includes(Hasil[0])) SelectedItem = "JBL Speaker";
  
    // Proses
    box?.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + Hasil[0] + "deg)";
    element?.classList.remove("animate");
    setTimeout(function () {
      element?.classList.add("animate");
    }, 5000);
  
    // Munculkan Alert
    setTimeout(function () {
      alert("You Won The " + SelectedItem + ".")
    }, 5500);
  
    // Delay and set to normal state
    setTimeout(function () {
      box?.style.setProperty("transition", "initial");
      box.style.transform = "rotate(90deg)";
    }, 6000);
  }
  
  

  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header />

      <main id="main-content">
        {/* ===== Heading & Continue Shopping */}
        <div className="mainbox" >
        <div className="box" id="box">
        <div className="box1">
          <span className="font span1"><b>Samsung Tab A6</b></span>
          <span className="font span2"><b>JBL Speaker</b></span>
          <span className="font span3"><b>Magic Roaster</b></span>
          <span className="font span4"><b>Sepeda Aviator</b></span>
          <span className="font span5"
            ><b
              >Rice Cooker <br />
              Philips</b
            ></span
          >
        </div>
        <div className="box2">
          <span className="font span1"><b>Lunch Box Lock&Lock</b></span>
          <span className="font span2"
            ><b
              >Air Cooler <br />
              Sanken</b
            ></span
          >
          <span className="font span3"><b>Ipad Mini 4</b></span>
          <span className="font span4"><b>Exclusive Gift</b></span>
          <span className="font span5"
            ><b
              >Electrolux <br />
              Blender</b
            ></span
          >
        </div>
      </div>
      <button className="spin" onClick={spin}>SPIN</button>
        </div>

        {/* ===== Wishlist Table Section ===== */}
        
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/common/${locale}.json`)).default,
    },
  };
};

export default Wishlist;
