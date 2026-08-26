import { Project, ServiceItem, AdvantageItem, ProcessStepItem, TestimonialItem } from '../types';

export const BRAND_INFO = {
  name: 'VELNORA',
  tagline: 'Interior Design & Build',
  foundedYear: '2018',
  address: 'Jl. Suryo No. 42, Senopati, Kebayoran Baru, Jakarta Selatan 12180',
  city: 'Jakarta, Indonesia',
  email: 'halo@velnora.id',
  phone: '+62 21 7280 4490',
  whatsapp: '+62 811 8900 4220',
  instagram: '@velnora.interior',
  operatingHours: 'Senin – Sabtu, 09.00 – 18.00 WIB',
  areasCovered: ['Jabodetabek', 'Bandung', 'Bali', 'Surabaya'],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'rumah-senja',
    name: 'Rumah Senja',
    tagline: 'Oase keheningan dengan nuansa tropis kontemporer di tengah denyut Jakarta Selatan.',
    category: 'Residensial',
    location: 'Cilandak, Jakarta Selatan',
    year: '2024',
    area: '480 m²',
    leadArchitect: 'Adhitya Pratama, IAI',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    ],
    description:
      'Rumah Senja dirancang sebagai tempat peristirahatan yang damai bagi keluarga muda. Memadukan dinding bertekstur kapur hangat, lantai travertine Roma, dan panel kayu jati tua daur ulang (reclaimed teak), interior ini mengalir mulus menghubungkan ruang keluarga dengan inner courtyard hijau beratap terbuka.',
    concept:
      'Penerapan filosofi Wabi-Sabi yang diselaraskan dengan iklim tropis lembap Indonesia. Tata pencahayaan alami dioptimalkan melalui kisi-kisi kayu vertikal yang membiaskan bayangan lembut saat matahari terbenam.',
    materials: ['Travertine Natural Stone', 'Solid Teakwood (Jati Solid)', 'Fluted Linen', 'Brushed Bronze Hardware', 'Lime Wash Paint'],
    clientQuote: {
      text: 'VELNORA berhasil menerjemahkan impian kami tentang rumah yang menenangkan. Setiap sudut terasa hangat dan tidak pernah membuat kami bosan berada di rumah.',
      author: 'Dharma & Clara S.',
    },
  },
  {
    id: 'rumah-aruna',
    name: 'Rumah Aruna',
    tagline: 'Penthouse hangat bernuansa luxury minimalism dengan panorama cakrawala Senopati.',
    category: 'Penthouse',
    location: 'Senopati, Jakarta Selatan',
    year: '2023',
    area: '360 m²',
    leadArchitect: 'Soraya Wardhani',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=85',
    ],
    description:
      'Menempati lantai atas apartemen prestisius di Senopati, Rumah Aruna memancarkan keanggunan yang tenang tanpa kemewahan yang bising. Dapur kustom berbalut marmer Fior di Bosco dipadukan dengan cabinetry kayu oak berserat alami dan pencahayaan aksen arsitektural yang tersembunyi.',
    concept:
      'Spatial Harmony & Tactile Warmth. Membagi area privat dan entertain secara cerdas melalui partisi pivot geser berprofil tipis berbahan kaca bertekstur dan kuningan berpatina halus.',
    materials: ['Fior di Bosco Marble', 'Smoked European Oak', 'Bouclé Upholstery', 'Satin Champagne Metal', 'Microtopping Floor'],
    clientQuote: {
      text: 'Ketelitian joinery kayu dan pemilihan marmernya luar biasa. Sangat mencerminkan identitas saya yang menyukai kerapian dan estetika minim gangguan visual.',
      author: 'Ibu Melati Kusuma',
    },
  },
  {
    id: 'villa-svara',
    name: 'Villa Svara',
    tagline: 'Sanctuary retret tropis berpadu bebatuan vulkanik dan kayu ulin di lembah Ubud.',
    category: 'Villa Tropis',
    location: 'Ubud, Bali',
    year: '2024',
    area: '620 m²',
    leadArchitect: 'Reza Mahendra',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85',
    ],
    description:
      'Villa Svara adalah karya arsitektur interior yang menghargai lanskap alam Bali yang rimbun. Dirancang dengan bukaan masif tanpa batas antara interior dan kolam renang alami, menggunakan material tanah liat terakota lokal, batu candi bertekstur, dan kayu ulin Kalimantan yang tahan cuaca.',
    concept:
      'Biophilic Luxury. Menyatu dengan suara gemericik air dan hembusan angin lembah, menghadirkan kamar mandi semi-terbuka dengan bathtub batu monolitik dan furnitur kustom buatan tangan seniman lokal Bali.',
    materials: ['Reclaimed Ironwood (Ulin)', 'Batu Candi Lava Stone', 'Raw Organic Linen', 'Terracotta Tiles', 'Polished Terrazzo'],
    clientQuote: {
      text: 'Tamu-tamu kami selalu terpukau dengan atmosfer Villa Svara. VELNORA mengeksekusi proyek ini dengan standar konstruksi dan estetika kelas dunia.',
      author: 'Ronald & Vania K.',
    },
  },
  {
    id: 'ruang-nara',
    name: 'Ruang Nara',
    tagline: 'Integrasi studio kreatif & hunian urban bernapas zen di lereng bukit Dago.',
    category: 'Commercial & Living',
    location: 'Dago Atas, Bandung',
    year: '2023',
    area: '290 m²',
    leadArchitect: 'Adhitya Pratama, IAI',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1400&q=85',
    ],
    description:
      'Konsep ruang multifungsi yang memisahkan zona kerja studio arsitektur di lantai bawah dengan hunian privat yang intim di lantai atas. Dinding microcement lembut dipadukan dengan meja kerja monolitik kayu trembesi dan rak buku baja tipis berfinishing hitam matte.',
    concept:
      'Minimalist Precision & Monochromatic Calm. Mengutamakan ketertiban visual, akustik yang teredam baik untuk konsentrasi tinggi, dan ventilasi silang udara sejuk pegunungan Bandung.',
    materials: ['Seamless Microcement', 'Solid Suar Wood (Trembesi)', 'Matte Black Steel', 'Acoustic Wool Panels', 'Textured Ceramic Tiles'],
    clientQuote: {
      text: 'Ruang Nara menjadi tempat terbaik saya untuk berkarya sekaligus beristirahat. Kualitas pengerjaan build-nya sangat rapi dan presisi.',
      author: 'Narendra Wijaya',
    },
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'desain-interior',
    number: '01',
    title: 'Desain Interior',
    subtitle: 'Konseptualisasi & Perencanaan Spasial Komprehensif',
    description:
      'Kami merancang narasi spasial yang holistik—mulai dari studi zoning tata ruang, layout ergonomis, moodboard material autentik, visualisasi 3D fotorealistik resolusi tinggi, hingga gambar kerja teknis presisi untuk pelaksanaan di lapangan.',
    deliverables: [
      'Analisis Kebutuhan & Zoning Tata Letak',
      'Visualisasi 3D Render Fotorealistik 4K',
      'Skema Pencahayaan Arsitektural (Lighting Plan)',
      'Spesifikasi Material Board & Palet Warna',
      'Detailed Engineering Drawings (DED)',
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85',
    highlightTag: 'Perencanaan Menyeluruh',
  },
  {
    id: 'interior-build',
    number: '02',
    title: 'Interior Build',
    subtitle: 'Konstruksi Terpadu & Fabrikasi Millwork Presisi',
    description:
      'Mewujudkan desain menjadi kenyataan melalui divisi konstruksi dan workshop fabrikasi in-house kami. Didukung tim tukang kayu dan teknisi berpengalaman untuk memastikan sambungan presisi milimeter, kekokohan struktur, dan durabilitas jangka panjang.',
    deliverables: [
      'Pekerjaan Sipil, Dinding, Plafon & Partisi Akustik',
      'Fabrikasi Custom Joinery & Loose Furniture In-House',
      'Instalasi Kelistrikan, Sanitari & MEP Terstandarisasi',
      'Pemasangan Batu Alam, Marmer & Lantai Kayu Presisi',
      'Pengawasan Supervisi Proyek Harian oleh Project Manager',
    ],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=85',
    highlightTag: 'Workshop & Tim In-House',
  },
  {
    id: 'renovasi',
    number: '03',
    title: 'Renovasi',
    subtitle: 'Transformasi Ruang dengan Manajemen Terstruktur',
    description:
      'Meremajakan dan menata ulang hunian lama atau properti komersial Anda menjadi mahakarya modern tanpa kekacauan. Kami mengelola perizinan, pembongkaran terukur, perkuatan struktur, hingga finishing akhir dengan jadwal yang terukur ketat.',
    deliverables: [
      'Audit Struktur & Kondisi Ruang Eksisting',
      'Perencanaan Rekonfigurasi Dinding & Ruang',
      'Penggantian Sistem Utilitas, Kabel & Pemipaan',
      'Peremajaan Fasad Interior & Bukaan Jendela',
      'Jaminan Garansi Pemeliharaan Pasca Renovasi',
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85',
    highlightTag: 'Tepat Waktu & Bergaransi',
  },
  {
    id: 'styling-finishing',
    number: '04',
    title: 'Styling & Finishing',
    subtitle: 'Sentuhan Akhir, Kurasi Seni & Pencahayaan',
    description:
      'Memberikan jiwa dan karakter pada setiap ruang melalui kurasi karya seni kontemporer, soft furnishing berkualitas tinggi (linen, sutra, wol), pemilihan tanaman dalam ruang, aroma khas, serta tata letak dekoratif yang menawan dan berkelas.',
    deliverables: [
      'Kurasi Karya Seni (Lukisan, Patung & Keramik Buatan Tangan)',
      'Pemilihan Soft Furnishing, Karpet Wol & Gorden Kustom',
      'Penyelarasan Warna Aksesoris & Pencahayaan Ambience',
      'Kurasi Tanaman Hias Dalam Ruang (Indoor Plants)',
      'Sesi Pembersihan Khusus & Handover Presentation',
    ],
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=900&q=85',
    highlightTag: 'Kurasi Editorial',
  },
];

export const ADVANTAGES_DATA: AdvantageItem[] = [
  {
    id: 'konsep-personal',
    number: '01',
    title: 'Konsep yang Personal',
    description:
      'Kami tidak menduplikasi template. Setiap ruang lahir dari pemahaman mendalam atas kepribadian, rutinitas harian, dan aspirasi estetika penghuninya.',
    detail: 'Mulai dari tata letak ergonomis hingga kebiasaan pagi Anda, semua dihitung secara presisi.',
    iconName: 'Sparkles',
  },
  {
    id: 'material-berkualitas',
    number: '02',
    title: 'Material Berkualitas',
    description:
      'Kurasi ketat terhadap kayu solid berizin resmi, batu alam terverifikasi, pelapis non-toksik, serta engsel dan fitting berstandar Eropa.',
    detail: 'Hanya menggunakan bahan yang menua secara anggun seiring berjalannya waktu (age with grace).',
    iconName: 'Layers',
  },
  {
    id: 'perhatian-detail',
    number: '03',
    title: 'Perhatian terhadap Detail',
    description:
      'Presisi milimeter pada setiap sambungan joinery, transisi lantai yang rata sempurna, dan integrasi lampu tersembunyi yang tanpa cacat.',
    detail: 'Standar pengawasan bertingkat yang menjamin hasil fisik sesuai dengan representasi 3D render.',
    iconName: 'Compass',
  },
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Konsultasi & Penyelidikan Ruang',
    duration: 'Minggu 1',
    description:
      'Pertemuan awal untuk mendengarkan visi, kebutuhan ruang, estimasi anggaran, serta survei dan pengukuran detail lokasi properti Anda.',
    details: [
      'Wawancara mendalam preferensi gaya hidup',
      'Pengukuran dimensi dan dokumentasi site',
      'Penyusunan preliminary design brief',
    ],
  },
  {
    step: '02',
    title: 'Konsep & Eksplorasi Moodboard',
    duration: 'Minggu 2',
    description:
      'Pengembangan konsep spasial awal, pembagian zonasi layout, skema warna, dan sampel material fisik untuk merumuskan arah desain.',
    details: [
      'Pembuatan 2D Space Planning / Denah Tata Ruang',
      'Penyusunan Material & Palette Moodboard',
      'Diskusi interaktif pemilihan sampel material',
    ],
  },
  {
    step: '03',
    title: 'Desain 3D & Gambar Kerja Teknis',
    duration: 'Minggu 3 – 5',
    description:
      'Penyempurnaan visualisasi 3D fotorealistik bersudut lengkap beserta gambar kerja teknis (DED) mendetail dan Rencana Anggaran Biaya (RAB) transparan.',
    details: [
      'Render 3D fotorealistis pencahayaan siang & malam',
      'Gambar kerja arsitektural, joinery & MEP',
      'RAB transparan dengan spesifikasi item jelas',
    ],
  },
  {
    step: '04',
    title: 'Pengerjaan & Fabrikasi Presisi',
    duration: 'Minggu 6 – 16',
    description:
      'Pelaksanaan konstruksi on-site dan pembuatan custom furniture di workshop in-house dengan laporan progres mingguan berkala.',
    details: [
      'Fabrikasi kustom furniture oleh artisan in-house',
      'Pekerjaan sipil & utilitas dengan standar K3',
      'Laporan progres visual mingguan untuk klien',
    ],
  },
  {
    step: '05',
    title: 'Serah Terima & Garansi Pemeliharaan',
    duration: 'Tahap Akhir',
    description:
      'Pemeriksaan kualitas menyeluruh (Quality Checklist), penataan akhir (styling), serah terima kunci, serta penerbitan sertifikat garansi pemeliharaan.',
    details: [
      'Deep cleaning menyeluruh sebelum serah terima',
      'Handover binder & petunjuk perawatan material',
      'Garansi pemeliharaan dan purna jual 12 bulan',
    ],
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'testi-1',
    clientName: 'Dharma & Clara Setiawan',
    role: 'Pemilik Rumah Senja',
    project: 'Rumah Senja (Residensial 480 m²)',
    location: 'Cilandak, Jakarta Selatan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    content:
      'Bekerja bersama VELNORA adalah pengalaman yang sangat menyenangkan. Mereka tidak hanya mendesain rumah yang indah di foto, tetapi benar-benar fungsional dan menenangkan untuk kami sekeluarga hidup sehari-hari. Komitmen ketepatan waktu dan kebersihan selama pengerjaan sangat mengesankan.',
    highlight: 'Rumah yang menenangkan dan fungsional untuk kehidupan sehari-hari.',
    rating: 5,
  },
  {
    id: 'testi-2',
    clientName: 'Ibu Melati Kusuma',
    role: 'Pemilik Unit Penthouse',
    project: 'Rumah Aruna (Penthouse 360 m²)',
    location: 'Senopati, Jakarta Selatan',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    content:
      'Sebagai orang yang perfeksionis, saya sangat memperhatikan detail sambungan kayu dan marmer. Tim VELNORA berhasil melampaui ekspektasi saya. Setiap sudut penthouse dikerjakan dengan presisi tinggi dan estetika yang luar biasa elegan. Sangat saya rekomendasikan untuk hunian premium.',
    highlight: 'Detail sambungan kayu dan marmer dikerjakan dengan presisi tinggi.',
    rating: 5,
  },
  {
    id: 'testi-3',
    clientName: 'Ronald & Vania Kusnadi',
    role: 'Founder & Pengelola Properti',
    project: 'Villa Svara (Villa Tropis 620 m²)',
    location: 'Ubud, Bali',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    content:
      'Proyek di Bali memiliki tantangan iklim dan logistik tersendiri. Namun VELNORA mengelolanya dengan sangat profesional. Pemilihan material batu candi dan kayu ulin lokal berpadu sempurna dengan arsitektur modern. Semua tamu internasional kami selalu memuji keindahan interiornya.',
    highlight: 'Sangat profesional mengelola proyek bernilai tinggi dengan estetika kelas dunia.',
    rating: 5,
  },
];
