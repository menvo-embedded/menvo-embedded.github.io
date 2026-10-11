const translations = {
  vi: {
    navProjects: "Dự án", navCapabilities: "Năng lực", navExperience: "Nền tảng", navContact: "Liên hệ", downloadCV: "Tải CV",
    availability: "Đang tìm cơ hội thực tập Embedded & IoT",
    heroTitle: "Tôi xây dựng hệ thống nhúng có thể kiểm thử, đo lường và giải thích.",
    heroLede: "Sinh viên Công nghệ Kỹ thuật Máy tính tập trung vào giao tiếp thiết bị BLE, mạng cảm biến có cơ chế dự phòng và HW/SW co-design trên FPGA.",
    exploreWork: "Xem dự án", gradLabel: "Dự kiến tốt nghiệp", educationLabel: "Kỹ thuật Máy tính", locationLabel: "Sinh sống tại Việt Nam",
    metricBoards: "bo ESP32 đã kiểm thử", metricPacket: "định dạng gói dữ liệu", metricThroughput: "thông lượng lõi RTL tại 100 MHz", metricVectors: "vector AES đã xác minh",
    projectsTitle: "Hai hệ thống tôi có thể trình bày từ kiến trúc đến kiểm thử.",
    projectsIntro: "Trọng tâm không phải danh sách công nghệ dài. Đó là quyết định thiết kế, trường hợp lỗi, phép đo và kết quả phần cứng tôi có thể giải thích.",
    wsnSummary: "Triển khai và kiểm thử Gateway GATT server cùng Sensor client. Xác minh đường truyền dự phòng qua Relay trên ba bo ESP32 thật.",
    builtLabel: "Đã triển khai", testedLabel: "Đã kiểm thử",
    wsnBuilt: "Khám phá service, gói dữ liệu 10 byte, GATT Write With Response, đưa dữ liệu callback về loop bằng queue, theo dõi sequence và log Serial CSV.",
    wsnTested: "Chuyển đường sau ba lần mất phản hồi, thử lại Gateway sau mười lần truyền qua Relay thành công, chặn kết nối và ngắt kết nối bất đồng bộ.",
    explainTitle: "Tôi có thể giải thích",
    wsnExplain1: "Vì sao tác vụ BLE blocking không chạy trong callback", wsnExplain2: "Cách sequence number phát hiện mất và trùng gói",
    wsnExplain3: "Phản hồi theo từng chặng và giao nhận end-to-end", wsnExplain4: "Ngưỡng failover ảnh hưởng hành vi hệ thống thế nào",
    aesSummary: "Thiết kế lõi AES-128 dạng iterative và pipeline 10 tầng, hoàn tất quy trình Vivado và tích hợp bộ tăng tốc với ARM Cortex-A9.",
    vivadoLabel: "Quy trình Vivado", resultLabel: "Phạm vi kết quả",
    aesFlow: "RTL và testbench, mô phỏng hành vi, synthesis, implementation, kiểm tra timing, tạo bitstream, export hardware và kiểm thử trên board.",
    aesResult: "Xác minh bằng vector FIPS-197. Lõi pipeline nhận một block 128 bit mỗi chu kỳ, tương ứng 12.8 Gbps tại 100 MHz trong mô phỏng RTL.",
    explainTitle2: "Tôi có thể giải thích", aesExplain1: "Latency và throughput của lõi iterative so với pipeline",
    aesExplain2: "Kết quả mô phỏng RTL so với hành vi trên board", aesExplain3: "C driver truy cập thanh ghi AXI4-Lite", aesExplain4: "Đánh đổi giữa RTL và HLS trong Vivado",
    rfidSummary: "Xác định workflow truy cập, quy trình huấn luyện mô hình, kịch bản kiểm thử và tiêu chí nghiệm thu. Lắp ráp phần cứng, tích hợp các thành phần, tái hiện lỗi và xác minh toàn hệ thống.",
    capabilitiesTitle: "Bộ công cụ Embedded thực tế, được sắp xếp theo cách tôi sử dụng.",
    backgroundTitle: "Nền tảng kỹ thuật cùng kỷ luật từ trải nghiệm làm việc thực tế.",
    highlandsText: "Làm việc ở các vị trí nhận order, bán hàng, barista và chăm sóc khách hàng; hỗ trợ vận hành đội nhóm trong giờ cao điểm.",
    editorText: "Chỉnh sửa khoảng 15 video ngắn và kiểm tra nhịp dựng, phụ đề, âm thanh, hình ảnh cùng chất lượng xuất cuối.",
    contactTitle: "Bạn đang tìm thực tập sinh Embedded hoặc IoT?",
    contactText: "Tôi sẵn sàng trình bày kiến trúc, luồng code, cách kiểm thử và giới hạn của các dự án trên."
  }
};

const languageButton = document.querySelector('.language-toggle');
let currentLanguage = 'en';
languageButton.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'en' ? 'vi' : 'en';
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    if (!node.dataset.original) node.dataset.original = node.textContent;
    node.textContent = currentLanguage === 'vi' ? (translations.vi[node.dataset.i18n] || node.dataset.original) : node.dataset.original;
  });
  languageButton.textContent = currentLanguage === 'en' ? 'VI' : 'EN';
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const gallery = document.querySelector('#flow-gallery');
document.querySelector('.gallery-trigger').addEventListener('click', () => gallery.showModal());
document.querySelector('.dialog-close').addEventListener('click', () => gallery.close());
gallery.addEventListener('click', (event) => {
  if (event.target === gallery) gallery.close();
});

document.querySelector('#year').textContent = new Date().getFullYear();
