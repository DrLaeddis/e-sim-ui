import singaporeImg from "../assets/singapore.jpg";
import indonesiaImg from "../assets/indonesia.jpg";
import usaImg from "../assets/usa.jpg";
import southKoreaImg from "../assets/south_korea.jpg";

export interface PackageData {
    id: number;
    title: string;
    region: string;
    type: string;
    price: string;
    image: string;
}

export const packageData: PackageData[] = [
    {
        id: 1,
        title: "eSIM Singapore",
        region: "Region Asia",
        type: "Instant",
        price: "69000",
        image: singaporeImg
    },
    {
        id: 2,
        title: "eSIM Indonesia",
        region: "Region Asia",
        type: "Topupable",
        price: "52000",
        image: indonesiaImg
    },
    {
        id: 3,
        title: "eSIM USA",
        region: "Region Amerika",
        type: "Instant",
        price: "150000",
        image: usaImg
    },
    {
        id: 4,
        title: "eSIM South Korea",
        region: "Region Asia",
        type: "Topupable",
        price: "72000",
        image: southKoreaImg
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