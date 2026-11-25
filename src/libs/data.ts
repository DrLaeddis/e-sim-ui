import singaporeImg from "../assets/singapore.jpg";
import indonesiaImg from "../assets/indonesia.jpg";
import usaImg from "../assets/usa.jpg";
import southKoreaImg from "../assets/south_korea.jpg";
import LogoSaldo from "../assets/logoSaldo";
import LogoBCA from "../assets/logoBCA";
import LogoMandiri from "../assets/logoMandiri";
import LogoBRI from "../assets/logoBRI";

interface PackageData {
    id: number;
    title: string;
    region: string;
    type: string;
    price: string;
    country: string;
    image: string;
}

export interface DataSize {
  id: number;
  label: string;
  value: string;
}

export interface DataChoise {
  id: number;
  label: string;
  value: string;
}

export const packageData: PackageData[] = [
    {
        id: 1,
        title: "eSIM Singapore",
        region: "Region Asia",
        type: "Instant",
        price: "69000",
        image: singaporeImg,
        country: 'Singapore'
    },
    {
        id: 2,
        title: "eSIM Indonesia",
        region: "Region Asia",
        type: "Topupable",
        price: "52000",
        image: indonesiaImg,
        country: 'Indonesia'
    },
    {
        id: 3,
        title: "eSIM USA",
        region: "Region Amerika",
        type: "Instant",
        price: "150000",
        image: usaImg,
        country: 'USA'
    },
    {
        id: 4,
        title: "eSIM South Korea",
        region: "Region Asia",
        type: "Topupable",
        price: "72000",
        image: southKoreaImg,
        country: 'South Korea'
    },
]

export const FILTER_CONFIG = {
  region: {
    title: "Pilih Region",
    defaultValue: "all",
    options: [
      { label: "Semua Region", value: "all" },
      { label: "Asia", value: "Asia" },
      { label: "Amerika", value: "Amerika" },
      { label: "Oseania", value: "Oseania" },
      { label: "Eropa", value: "Eropa" },
      { label: "Afrika", value: "Afrika" },
    ],
  },
  type: {
    title: "Pilih Jenis Produk",
    defaultValue: "all",
    options: [
      { label: "Semua Jenis", value: "all" },
      { label: "Instants", value: "Instant" },
      { label: "Topupable", value: "Topupable" },
    ],
  },
};

export const dataSize: DataSize[] = [
    {
        id: 1,
        label: '3GB',
        value: '3 GB',
    },
    {
        id: 2,
        label: '5GB',
        value: '5 GB'
    },
    {
        id: 3,
        label: '10GB',
        value: '10 GB'
    },
    {
        id: 4,
        label: '15GB',
        value: '15 GB'
    },
]

export const dayChoice: DataChoise[] = [
    {
        id: 1,
        label: '07',
        value: '07',
    },
    {
        id: 2,
        label: '14',
        value: '14'
    },
    {
        id: 3,
        label: '24',
        value: '24'
    },
    {
        id: 4,
        label: '30',
        value: '30'
    },
]

export const descriptionProduct = [
  {
    id: 1,
    label: 'SIM/eSIM dengan koneksi cepat hingga 4G.'
  },
  {
    id: 2,
    label: 'SIM tersedia dalam tiga ukuran; eSIM dilengkapi dengan kode QR dan petunjuk pemasangan.'
  },
  {
    id: 3,
    label: 'Terhubung ke operator terbaik untuk cakupan dan kecepatan optimal.'
  },
  {
    id: 4,
    label: 'Masa berlaku data dimulai saat pertama kali digunakan di negara tujuan.'
  },
  {
    id: 5,
    label: 'Paket mulai dari 500MB/hari hingga 30GB/bulan, dengan durasi dari 1 hari hingga 1 bulan.'
  },
]

export const paymentMethods = [
  {
    id: 1,
    label: 'Saldo',
    logo: LogoSaldo
  },
  {
    id: 2,
    label: 'VA BCA',
    logo: LogoBCA
  },
  {
    id: 3,
    label: 'VA Mandiri',
    logo: LogoMandiri
  },
  {
    id: 4,
    label: 'VA BRI',
    logo: LogoBRI
  },
]