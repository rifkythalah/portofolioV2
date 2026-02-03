export const projects = [
  {
    id: 1,
    title: "Lapor.Pal - Oliampiade Vokasi indonesia 2025",
    image: "/images/projects/olivia.png",
    category: "Web Development",
    technologies: ["Laravel", "Tailwind CSS", "JavaScript", "Leaflet JS", "Chart JS", "MySQL", "Proxmox", "Ubuntu Server", "Python Flask"],
    certificate: "/images/projects/Webtech.jpg",
    demoUrl: "https://drive.google.com/file/d/152HmRuag7VbR_9FBBwjhh3jAwDqLOGT2/view?usp=drive_link",
    githubUrl: "https://github.com/RkyAngga/JuaraOliviaFinal?tab=readme-ov-file",
    description: "Laporan Pengaduan Publik dan Layanan Pemerintah untuk Transparansi dalam Peningkatan Infrastruktur Jalan Berdasarkan Teknologi WebGIS dan Blockchain.",
    detailedDescription: `Lapor.Pal merupakan platform pengaduan jalan rusak berbasis WebGIS yang dirancang untuk memudahkan masyarakat Kota Malang dalam melaporkan kerusakan jalan secara cepat, akurat, dan transparan. Dengan dukungan GPS, pengambilan foto langsung, dan pelacakan status real-time, sistem ini menjembatani komunikasi antara masyarakat dan dinas terkait secara efisien. Lapor.Pal diharapkan menjadi inovasi layanan publik digital yang mendukung peningkatan pengawasan infrastruktur, transparansi penanganan laporan, serta kepercayaan masyarakat.

    FITUR UTAMA

    • Pelaporan Jalan Rusak Berbasis WebGIS
    Pengguna dapat melaporkan kerusakan jalan langsung dari lokasi kejadian melalui peta interaktif berbasis Leaflet.js, dengan foto kondisi jalan dan koordinat GPS yang terekam otomatis. Status laporan ditampilkan secara real-time dengan indikator yang jelas.

    • Keamanan dan Transparansi Data (Blockchain)
    Setiap laporan dan perubahan status dicatat dalam blockchain, sehingga data bersifat permanen, tidak dapat dimanipulasi, dan dapat diaudit secara publik.

    • Validasi Duplikasi Laporan Otomatis
    Sistem mendeteksi laporan dalam radius 5 meter untuk mencegah duplikasi. Laporan yang sama akan digabung secara otomatis, sehingga proses penanganan menjadi lebih efisien.

    • Partisipasi Publik
    Pengguna dapat memberikan komentar, menyukai laporan, serta memberikan ulasan terhadap kinerja penyelesaian laporan oleh dinas terkait.

    • Notifikasi & Pengawasan Pemerintah
    Pemerintah Kota menerima notifikasi otomatis apabila laporan tidak ditindaklanjuti atau melebihi estimasi waktu penyelesaian.

    • Visualisasi Kinerja Dinas
    Kinerja penyelesaian laporan ditampilkan dalam bentuk grafik statistik yang dapat diakses publik untuk mendukung evaluasi dan transparansi.

    PERAN DAN TANGGUNG JAWAB

    Dalam pengembangan project ini, saya berperan sebagai Leader Tim dengan tanggung jawab utama:
    • Mengonsep dan merancang fitur-fitur utama sistem bersama tim
    • Mengembangkan antarmuka pengguna (UI Front-end) yang responsif dan user-friendly
    • Mengembangkan backend aplikasi serta integrasi antar sistem
    • Mengkoordinasikan pembagian tugas dan alur kerja pengembangan project`,
  },
  {
    id: 2,
    title: "Smart Parking dan Fire Detection System",
    image: "/images/projects/iot.png",
    category: "Web Development",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "Arduino IDE", "Ngrok"],
    demoUrl: "https://youtu.be/6kER7mfUOKk?si=nFQ0uUuDZsheFqxU",
    description: "Sistem manajemen parkir pintar berbasis IoT dengan integrasi deteksi kebakaran, dashboard monitoring real-time, dan sistem peringatan kebakaran otomatis untuk meningkatkan keselamatan.",
    detailedDescription: `Project ini merupakan pengembangan sistem Internet of Things (IoT) yang mengintegrasikan perangkat hardware Arduino/ESP32 dengan website berbasis web dashboard untuk kebutuhan monitoring secara real-time. Sistem dirancang untuk memantau kondisi slot parkir sekaligus mendeteksi potensi kebakaran secara otomatis melalui sensor yang terhubung langsung ke dashboard web.

    Pada proyek ini, saya membangun website secara fullstack, di mana ESP32 terhubung ke web melalui koneksi WiFi, kemudian berkomunikasi dengan API Laravel sebagai backend. Untuk memungkinkan perangkat lokal dapat diakses melalui internet, digunakan Ngrok sebagai jembatan koneksi dari server lokal ke jaringan publik.

    RUANG LINGKUP PENGEMBANGAN

    • Integrasi hardware IoT (ESP32 & sensor Arduino) dengan website menggunakan REST API
    • Pengembangan web dashboard fullstack untuk visualisasi data sensor real-time

    FITUR UTAMA

    • Monitoring Slot Parkir Otomatis
    Menampilkan status slot parkir (kosong/terisi) secara real-time, mencatat riwayat aktivitas parkir (history parking), serta monitoring durasi parkir dan perhitungan total biaya parkir per jam.

    • Dashboard Parkir Interaktif
    Visualisasi jumlah slot parkir yang tersedia, informasi durasi parkir setiap kendaraan, dan rekap total biaya parkir berdasarkan waktu penggunaan.

    • Sistem Deteksi Kebakaran Terintegrasi
    Integrasi sensor flame detector untuk mendeteksi potensi kebakaran dengan status real-time (Safe, Warning, Danger). Sistem dilengkapi timestamp waktu kejadian dan alert otomatis untuk meningkatkan respons dan keamanan area parkir.`,
  },
  {
    id: 3,
    title: "Website Pendopo Lawas Restaurant Jogja",
    image: "/images/projects/rumahMakan.png",
    category: "Web Development",
    technologies: ["Bootstrap", "Html", "Css", "JavaScript"],
    demoUrl: "https://rumahmakan-jogja.netlify.app/",
    githubUrl: "https://github.com/rifkythalah/rumahmakan-jogjakarta",
    description: "Website profil rumah makan khas Jogja yang dirancang untuk memperkenalkan kuliner tradisional Yogyakarta kepada wisatawan dan masyarakat luas secara online.",
    detailedDescription: `Website Rumah Makan Pendopo Lawas merupakan platform digital yang dirancang untuk membranding dan memperkenalkan rumah makan khas Yogyakarta kepada masyarakat luas, khususnya wisatawan yang berkunjung ke Jogja. Melalui website ini, pengunjung dapat mengenal lebih dekat kuliner tradisional Yogyakarta yang autentik dan khas.

    TUJUAN PENGEMBANGAN

    Website ini bertujuan untuk meningkatkan brand awareness Rumah Makan Pendopo Lawas di platform digital, sehingga lebih mudah dikenal oleh wisatawan dan masyarakat yang ingin merasakan cita rasa masakan khas Jogjakarta. Dengan kehadiran online, rumah makan dapat menjangkau audiens yang lebih luas dan memberikan informasi lengkap mengenai menu, lokasi, dan pengalaman kuliner yang ditawarkan.

    FITUR UTAMA

    • Tampilan Visual Menarik
    Desain website yang mencerminkan nuansa tradisional Jogja dengan tata letak yang user-friendly dan responsif di berbagai perangkat.

    • Katalog Menu Masakan
    Menampilkan berbagai menu masakan khas Yogyakarta dengan foto, deskripsi, dan harga yang jelas untuk memudahkan pengunjung dalam memilih hidangan.

    • Informasi Lokasi & Kontak
    Menyediakan informasi detail mengenai alamat rumah makan, jam operasional, dan kontak yang dapat dihubungi untuk reservasi atau pertanyaan.

    TEKNOLOGI YANG DIGUNAKAN

    Website ini dibangun menggunakan teknologi web fundamental (HTML, CSS, JavaScript, Bootstrap) untuk menghasilkan tampilan yang responsif dan performa yang optimal.`,
  },
  {
    id: 4,
    title: "Website Rental Motor",
    image: "/images/projects/rentalMotor.png",
    category: "Web Development",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/rifkythalah/rentalmotor-laravel",
    description: "Sistem manajemen rental motor berbasis web dengan fitur pemesanan online, pengelolaan kendaraan, dan dashboard admin untuk monitoring transaksi secara real-time.",
    detailedDescription: `Website Rental Motor merupakan project tugas kuliah yang dikembangkan secara tim menggunakan framework Laravel. Platform ini dirancang untuk memudahkan proses penyewaan motor secara online dengan sistem yang terintegrasi antara pengguna dan admin. Dalam pengembangan project ini, saya bertanggung jawab mengerjakan tampilan UI front-end serta mengonsepkan fitur-fitur yang akan diimplementasikan dalam website.

    FITUR UNTUK PENGGUNA

    • Katalog Kendaraan
    Menampilkan list daftar merek motor yang tersedia untuk disewakan lengkap dengan informasi harga sewa per hari, spesifikasi kendaraan, dan foto motor.

    • Cek Ketersediaan Motor
    Pengguna dapat memeriksa status ketersediaan motor secara real-time, melihat motor mana yang tersedia dan tidak tersedia untuk periode tertentu.

    • Review & FAQ
    Menyediakan fitur review dari pelanggan lain untuk membantu keputusan penyewaan, serta halaman FAQ (Frequently Asked Questions) untuk memudahkan pengguna memahami proses rental.

    • Sistem Registrasi & Autentikasi
    Pengguna harus melakukan registrasi akun terlebih dahulu sebelum dapat melakukan pemesanan motor, memastikan keamanan dan tracking transaksi.

    FITUR UNTUK ADMIN

    • Manajemen Kendaraan (CRUD)
    Admin dapat melakukan Create, Read, Update, dan Delete pada data kendaraan. Setiap perubahan data akan langsung terupdate di halaman pengguna.

    • Monitoring Pengguna
    Melihat dan mengelola daftar pengguna yang telah melakukan registrasi akun untuk keperluan administrasi dan customer management.

    • Dashboard Transaksi
    Admin dapat memantau jumlah dan detail transaksi yang dilakukan oleh pengguna, termasuk histori pemesanan dan status pembayaran.

    • Kontrol Status Ketersediaan
    Admin dapat mengubah status ketersediaan motor menjadi "tersedia" atau "tidak tersedia" berdasarkan kondisi penyewaan atau maintenance kendaraan.

    PERAN DAN TANGGUNG JAWAB

    • Merancang dan mengembangkan UI/UX front-end yang user-friendly dan responsif
    • Mengonsepkan fitur-fitur sistem rental motor bersama tim
    • Melakukan integrasi tampilan front-end dengan backend Laravel`,
  },
  {
    id: 5,
    title: "Website Peminjaman Buku Perpustakaan",
    image: "/images/projects/peminjamanBuku.png",
    category: "Web Development",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    githubUrl: "https://github.com/rifkythalah/peminjamanbuku-perpustakaan",
    description: "Sistem manajemen peminjaman buku perpustakaan berbasis web dengan fitur registrasi siswa, tracking peminjaman, dan dashboard admin untuk monitoring aktivitas perpustakaan.",
    detailedDescription: `Website Peminjaman Buku Perpustakaan merupakan project tugas kuliah yang dikembangkan bersama rekan menggunakan PHP. Platform ini dirancang untuk mengelola sistem peminjaman buku secara digital, memudahkan siswa dalam meminjam buku dan membantu admin/petugas perpustakaan dalam monitoring aktivitas peminjaman.

    FITUR UNTUK SISWA

    • Katalog Buku Digital
    Menampilkan list daftar judul buku yang tersedia di perpustakaan dengan informasi lengkap tentang ketersediaan buku.

    • Sistem Registrasi & Peminjaman
    Siswa harus mengisi form dan melakukan registrasi akun terlebih dahulu sebelum dapat meminjam buku, memastikan tracking peminjaman yang akurat.

    • Aturan Peminjaman
    Setiap siswa hanya diperbolehkan meminjam 1 buku per akun. Buku yang sedang dipinjam harus dikembalikan terlebih dahulu sebelum dapat meminjam buku lainnya.

    • Sistem Denda Otomatis
    Siswa akan dikenakan denda otomatis apabila melewati batas waktu peminjaman yang ditentukan, atau jika buku mengalami kerusakan dan kehilangan.

    FITUR UNTUK ADMIN & PETUGAS

    • Manajemen Pengguna
    Admin dapat melihat dan mengelola daftar siswa dan petugas perpustakaan yang telah melakukan registrasi akun.

    • Monitoring Peminjaman
    Admin dan petugas dapat memantau jumlah dan status peminjaman yang dilakukan oleh siswa, termasuk histori peminjaman dan pengembalian.

    • Pengelolaan Data Peminjaman
    Admin dan petugas dapat menambahkan data peminjaman baru secara manual, mengedit status peminjaman, dan mencatat pengembalian buku.

    • Laporan & Statistik
    Sistem menyediakan laporan peminjaman dan statistik penggunaan perpustakaan untuk evaluasi dan pengambilan keputusan.`,
  },
  {
    id: 6,
    title: "Smart Farm - Aplikasi IoT Perkebunan",
    image: "/images/projects/smartFarm.png",
    category: "UI Components",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    demoUrl: "https://www.figma.com/design/Mbblyv0T1x25XfqPTe1bbh/go-to-uas-ui-ux?node-id=116-1715&p=f",
    description: "UI/UX Design aplikasi IoT untuk monitoring dan automasi perkebunan cerdas dengan integrasi sensor kelembapan, kontrol otomatis penyiraman, dan analisis kondisi tanaman real-time.",
    detailedDescription: `Smart Farm merupakan project UI/UX Design yang dikembangkan bersama tim menggunakan Figma sebagai solusi inovatif dalam teknologi pertanian modern. Aplikasi ini dirancang untuk membantu petani dan pekebun dalam mengoptimalkan proses bercocok tanam melalui sistem monitoring dan automasi berbasis Internet of Things (IoT). Dalam pengembangan project ini, saya berperan dalam mengkonsep ide aplikasi serta merancang fitur-fitur yang akan diimplementasikan dalam prototype.

    TUJUAN APLIKASI

    Smart Farm bertujuan untuk meningkatkan efisiensi dan produktivitas perkebunan melalui teknologi IoT yang memungkinkan petani melakukan monitoring kondisi tanaman secara real-time dan mengontrol peralatan pertanian dari jarak jauh. Dengan sistem automasi cerdas, aplikasi ini membantu mengurangi beban kerja manual dan meningkatkan hasil panen.

    FITUR UTAMA

    • Monitoring Kelembapan Tanah & Cuaca
    Menampilkan data kelembapan tanah secara real-time dari sensor IoT yang terpasang di lahan. Terintegrasi dengan API BMKG untuk informasi cuaca terkini dan prediksi yang membantu perencanaan perawatan tanaman.

    • Sistem Automasi Perkebunan
    - Pemberian Pestisida Otomatis: Scheduling dan kontrol penyemprotan pestisida secara terprogram
    - Penyiraman Air Otomatis: Sistem irigasi pintar yang menyesuaikan dengan kelembapan tanah
    - Kontrol Lampu & Pengusir Burung: Automasi pencahayaan dan sistem pengusir burung untuk melindungi tanaman dari hama

    • Dashboard Monitoring Aktivitas
    Panel kontrol terpusat untuk memantau semua aktivitas perkebunan, status perangkat IoT, dan histori automasi yang telah dijalankan.

    • Tips & Trik Bercocok Tanam
    Menyediakan panduan praktis, artikel edukatif, dan best practices dalam proses perkebunan modern untuk membantu petani meningkatkan pengetahuan dan keterampilan.

    • Tracking Perkembangan Tanaman
    Fitur analisis dan visualisasi pertumbuhan tanaman dari waktu ke waktu, membantu petani memahami pola pertumbuhan dan mengidentifikasi potensi masalah lebih awal.

    PERAN DAN TANGGUNG JAWAB

    • Mengonsep ide dan fitur-fitur inovatif untuk aplikasi Smart Farm
    • Merancang user interface dan user experience yang intuitif dan user-friendly
    • Membuat prototype interaktif menggunakan Figma
    • Berkolaborasi dengan tim dalam proses desain dan iterasi`,
  },
  {
    id: 7,
    title: "OnlineShope - E-commerce Thrift Fashion",
    image: "/images/projects/ecommerce.png",
    category: "UI Components",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    demoUrl:
      "https://www.figma.com/proto/Vs6zcdodSbjF6D3cryqSQW/onlineshope?page-id=622%3A194&node-id=622-197&p=f&viewport=633%2C496%2C0.39&t=zKbhmGVy53cCv2YJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=622%3A440&show-proto-sidebar=1",
    description: "UI/UX Design aplikasi e-commerce untuk penjualan fashion thrifting dengan fokus pada t-shirt, sweater, dan hoodie berkualitas dengan harga terjangkau.",
    detailedDescription: `E-Commerce Thrifting adalah project UI/UX Design yang dikembangkan bersama tim menggunakan Figma sebagai platform desain, dengan fokus pada aplikasi e-commerce fashion thrifting. Aplikasi ini dirancang untuk menghadirkan pengalaman belanja pakaian bekas berkualitas seperti t-shirt, sweater, dan hoodie secara modern, mudah, dan menyenangkan.

    KONSEP APLIKASI

    Mengusung konsep sustainable fashion, E-Commerce Thrifting menyediakan platform jual-beli pakaian thrift yang masih layak pakai dan berkualitas. Desain antarmuka yang clean, modern, dan user-friendly membantu pengguna menemukan item fashion dengan harga terjangkau sekaligus mendukung gaya hidup ramah lingkungan melalui prinsip reuse dan recycle.

    FITUR UTAMA

    • Katalog Produk Thrift
    Menampilkan koleksi pakaian thrifting dengan kategori jelas, foto berkualitas, deskripsi kondisi barang, dan informasi ukuran.

    • Pencarian & Filter Produk
    Memudahkan pengguna menemukan produk berdasarkan kategori, ukuran, warna, harga, dan kondisi.

    • Shopping Cart & Checkout
    Alur keranjang belanja dan checkout yang sederhana, cepat, dan intuitif.

    • User Profile & Order History
    Pengelolaan akun, histori pesanan, tracking pengiriman, dan wishlist produk.

    • Review & Rating
    Sistem ulasan untuk meningkatkan kepercayaan dan membantu pengguna dalam mengambil keputusan pembelian.`,
  },
  {
    id: 8,
    title: "GreenSphere - Aplikasi Peduli Kebersihan Lingkungan",
    image: "/images/projects/greenSphere.png",
    category: "UI Components",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    demoUrl: "https://bit.ly/Protoype-AplikasiGreenSphere",
    description: "UI/UX Design aplikasi kepedulian lingkungan yang memfasilitasi pelaporan area kotor, kegiatan bersih-bersih komunitas, dan program volunter untuk menciptakan lingkungan yang lebih bersih.",
    detailedDescription: `GreenSphere adalah project UI/UX Design yang dikembangkan menggunakan Figma sebagai solusi digital untuk meningkatkan kepedulian masyarakat terhadap kebersihan lingkungan. Aplikasi ini dirancang dengan pendekatan modern, interaktif, dan berbasis komunitas untuk mendorong partisipasi aktif masyarakat dalam menjaga lingkungan.

    TUJUAN APLIKASI

    GreenSphere bertujuan menciptakan lingkungan yang lebih bersih melalui kolaborasi masyarakat. Pengguna dapat melaporkan area kotor, bergabung dalam kegiatan bersih-bersih komunitas, serta mengikuti program volunter lingkungan. Setiap fitur dirancang goal-oriented agar setiap aksi pengguna memberikan dampak nyata dan terukur.

    FITUR UTAMA

    • Pelaporan Area Kotor
    Pelaporan lokasi yang membutuhkan pembersihan dengan foto, GPS, dan deskripsi kondisi.

    • Komunitas Bersih-Bersih
    Fitur untuk membentuk dan bergabung dengan komunitas lokal dalam kegiatan gotong royong lingkungan.

    • Program Volunter
    Informasi event dan kegiatan lingkungan yang dapat diikuti masyarakat.

    • Tracking & Impact Visualization
    Visualisasi dampak kontribusi pengguna melalui statistik dan capaian komunitas.

    • Reward & Gamification
    Sistem penghargaan untuk meningkatkan engagement dan motivasi pengguna.

    PERAN DAN TANGGUNG JAWAB

    • Mengonsep ide aplikasi peduli lingkungan berbasis komunitas
    • Merancang user interface yang intuitif dan mendorong partisipasi aktif
    • Mendesain user experience yang goal-oriented untuk memaksimalkan dampak positif
    • Membuat prototype interaktif menggunakan Figma`,
  },
  {
    id: 9,
    title: "Logbook IT Data Center - PT POMI",
    image: "/images/projects/ITDataCenter.png",
    category: "Mobile Apps",
    technologies: ["Supabase", "FlutterFlow", "HeidiSQL"],
    description: "Aplikasi mobile tablet untuk pencatatan aktivitas keluar-masuk personel dan perangkat di Data Center dengan sistem persetujuan IT, real-time monitoring, dan ekspor laporan PDF.",
    detailedDescription: `Aplikasi Logbook IT Data Center merupakan pengembangan sistem digital yang bertujuan untuk menggantikan proses pencatatan manual aktivitas keluar dan masuk personel serta perangkat di lingkungan Data Center PT Paiton Operation & Maintenance Indonesia (PT POMI). Aplikasi ini dirancang sebagai sistem terpusat yang mendukung pencatatan aktivitas secara real-time, alur persetujuan oleh tim IT, serta penyimpanan riwayat kunjungan yang terstruktur dan aman.

    Dengan adanya sistem ini, proses operasional menjadi lebih efisien, akurat, dan transparan, serta memudahkan pelaporan dan kebutuhan audit melalui fitur penyaringan data dan ekspor laporan dalam format PDF.

    Fitur Utama

    • Pencatatan Aktivitas Real-Time
    Sistem pencatatan digital terpusat untuk aktivitas keluar dan masuk personel serta perangkat di Data Center, dilengkapi timestamp otomatis dan validasi data guna memastikan akurasi serta keterlacakan informasi.

    • Alur Persetujuan Tim IT Terstruktur
    Mekanisme workflow approval yang sistematis untuk memastikan setiap aktivitas telah memperoleh otorisasi resmi dari tim IT sebelum diproses atau dijalankan.

    • Manajemen Riwayat Kunjungan Terintegrasi
    Penyimpanan histori aktivitas secara terstruktur dengan fitur pencarian dan filter data berdasarkan tanggal, identitas personel, maupun jenis aktivitas untuk memudahkan monitoring dan penelusuran data.

    • Ekspor Laporan Otomatis ke Format PDF
    Fitur pembuatan laporan secara otomatis dalam format PDF yang mendukung kebutuhan dokumentasi operasional, audit, serta pelaporan kepada manajemen.

    • Keamanan Basis Data Berbasis Row Level Security (RLS)
    Penerapan Row Level Security pada Supabase PostgreSQL untuk membatasi akses data berdasarkan peran pengguna, sehingga keamanan dan integritas data tetap terjaga.

    PERAN DAN TANGGUNG JAWAB

    • Merancang alur kerja aplikasi (workflow) melalui sharing session dan analisis kebutuhan pengguna
    • Menyusun business process flow sebagai dasar perancangan dan pengembangan sistem
    • Mengembangkan aplikasi mobile tablet menggunakan FlutterFlow sebagai frontend
    • Membangun backend dan basis data menggunakan Supabase (PostgreSQL) dengan HeidiSQL
    • Mendesain struktur database, membangun relasi antar tabel, dan menerapkan Row Level Security (RLS)
    • Melakukan pengujian sistem, perbaikan bug, dan penyempurnaan antarmuka
    • Menyusun dokumentasi sistem meliputi SRS, User Guide, UAT, functional requirements, dan business process`,
  },

  {
    id: 10,
    title: "Training & Development System (Skill Matrix) - PT POMI",
    image: "/images/projects/skillMatrix.png",
    category: "Mobile Apps",
    technologies: ["Supabase", "FlutterFlow", "HeidiSQL"],
    description: "Aplikasi Dekstop untuk manajemen pelatihan karyawan dengan fitur Skill Matrix, analisis gap skill, dan traning & coaching management",
    detailedDescription: `Training & Development System (Skill Matrix) adalah aplikasi berbasis dekstop yang dirancang untuk membantu perusahaan memetakan kompetensi karyawan, mengidentifikasi skill gap, serta memantau proses pengembangan kemampuan secara terstruktur dan terukur.

    Sistem ini memungkinkan Shift Supervisor melakukan penilaian kompetensi karyawan berdasarkan standar posisi yang telah ditetapkan. Hasil penilaian dibandingkan secara otomatis dengan target kompetensi untuk mendeteksi kebutuhan training atau coaching. Seluruh aktivitas pengembangan didokumentasikan sebagai evidence dalam sistem agar proses monitoring lebih terukur, transparan, dan terdokumentasi dengan baik.

    FITUR UTAMA

    • Manajemen Data Karyawan dan Jabatan
    • Skill Matrix Management
    • Gap Skill Analysis
    • Training & Coaching Management
    • Reporting & Documentation
    • Dashboard & Analytics

    PERAN DAN TANGGUNG JAWAB

    • Mengembangkan tampilan dan fitur utama aplikasi Training & Development System menggunakan FlutterFlow
    • Merancang struktur tabel database dan relasi antar tabel untuk mendukung sistem skill matrix
    • Melakukan testing dan debugging untuk memastikan sistem berjalan optimal`,
  },
];

export const categories = ["All", "Web Development", "UI Components", "Mobile Apps"];
