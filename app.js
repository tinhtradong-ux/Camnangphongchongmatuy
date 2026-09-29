/**
 * Web App: CẨM NANG CHUNG TAY PHÒNG, CHỐNG MA TÚY
 * Hoàn chỉnh và tương tác phong phú
 */

// DỮ LIỆU 5 CHUYÊN MỤC CHÍNH
const TOPICS_DATA = [
  {
    id: "ma-tuy-la-gi",
    number: "01",
    title: "MA TÚY LÀ GÌ?",
    shortDesc: "Định nghĩa, phân loại và nhận diện các loại ma túy 'núp bóng' thế hệ mới tinh vi hiện nay.",
    icon: "shield-alert",
    color: "from-blue-600 to-cyan-600",
    badge: "Kiến thức căn bản",
    content: {
      intro: "Theo Luật Phòng, chống ma túy của Việt Nam: Ma túy là các chất gây nghiện, chất hướng thần được quy định trong danh mục do Chính phủ ban hành. Khi đưa vào cơ thể, chúng làm thay đổi trạng thái ý thức, tâm sinh lý và gây nghiện nặng nề.",
      sections: [
        {
          heading: "1. Phân loại ma túy phổ biến",
          items: [
            { name: "Ma túy tự nhiên", desc: "Có nguồn gốc từ thực vật như thuốc phiện, cần sa, lá coca... chứa độc tố gây suy nhược thần kinh." },
            { name: "Ma túy bán tổng hợp", desc: "Điều chế từ chất tự nhiên kết hợp hóa chất (Heroin, Morphin...), gây lệ thuộc cực nhanh." },
            { name: "Ma túy tổng hợp", desc: "Sản xuất hoàn toàn từ hóa chất nhân tạo (Ma túy đá - Methamphetamine, Thuốc lắc - Ecstasy, Ketamine...), tàn phá não bộ tàn khốc." }
          ]
        },
        {
          heading: "2. CẢNH GIÁC: Ma túy 'núp bóng' thế hệ mới",
          alert: "Hiện nay tội phạm ma túy pha trộn độc chất vào thực phẩm, đồ uống với bao bì bắt mắt nhằm dụ dỗ học sinh, thanh thiếu niên.",
          items: [
            { name: "Nước vui / Nước dâu / Trà sữa", desc: "Bột hoặc dung dịch pha vào nước ngọt, chứa Ketamine và thuốc lắc, gây hưng phấn tột độ, ảo giác và nguy cơ ngừng tim đột ngột." },
            { name: "Bóng cười (Khí N2O)", desc: "Khí gây cười làm tổn thương tủy sống, tê liệt tứ chi, mất khả năng vận động và thoái hóa thần kinh vĩnh viễn." },
            { name: "Cỏ Mỹ (K2 / Spice)", desc: "Thảo mộc tẩm hóa chất cực độc, mạnh gấp nhiều lần cần sa thường, gây kích động điên cuồng, hoang tưởng cấp tính." },
            { name: "Bánh cần sa / Bánh lười (Lazy Cake)", desc: "Bánh kẹo nướng tẩm chất THC ngấm từ từ qua đường tiêu hóa, rất dễ gây sốc thuốc và hôn mê sâu." },
            { name: "Pod Chill / Tinh dầu thuốc lá điện tử", desc: "Tinh dầu bị pha trộn chất ma túy tổng hợp mới, gây nghiện ngầm và tổn thương phổi, não bộ thanh thiếu niên." },
            { name: "Tem giấy (Bùa lưỡi - LSD)", desc: "Miếng giấy nhỏ tẩm chất gây ảo giác cực mạnh, làm mất nhận thức không gian thời gian, dẫn đến hành vi tự sát." }
          ]
        },
        {
          heading: "3. Dấu hiệu nhận biết sớm người tiếp xúc ma túy",
          items: [
            { name: "Về sinh hoạt", desc: "Thay đổi giờ giấc bất thường, hay vắng nhà ban đêm, ngủ gà gật ban ngày, sao nhãng học tập và công việc." },
            { name: "Về tâm lý", desc: "Dễ cáu gắt, hung hãn vô cớ, lầm lì, thu mình hoặc hưng cảm quá mức, né tránh người thân." },
            { name: "Về tài chính", desc: "Thường xuyên xin tiền, đồ đạc có giá trị trong nhà bị thất lạc, nợ nần không rõ lý do." }
          ]
        }
      ]
    }
  },
  {
    id: "tac-hai",
    number: "02",
    title: "TÁC HẠI CỦA MA TÚY",
    shortDesc: "Hủy hoại thể xác, tê liệt não bộ, phá nát hạnh phúc gia đình và đối mặt với án phạt nghiêm khắc.",
    icon: "flame",
    color: "from-rose-600 to-red-600",
    badge: "Hậu quả khôn lường",
    content: {
      intro: "Ma túy là 'cái chết trắng' không chỉ tước đoạt sức khỏe, tương lai của người sử dụng mà còn là thảm họa đối với cả gia đình và trật tự an toàn xã hội.",
      sections: [
        {
          heading: "1. Hủy hoại thể xác & Não bộ",
          items: [
            { name: "Suy kiệt lục phủ ngũ tạng", desc: "Phá hủy hệ tim mạch, suy gan, suy thận cấp, làm teo cơ bắp và hủy hoại hệ miễn dịch." },
            { name: "Hội chứng 'Ngáo đá' cực kỳ nguy hiểm", desc: "Ma túy đá phá hủy các tế bào thần kinh, gây ảo giác bị truy sát, ghen tuông bệnh hoạn, dẫn đến các vụ án mạng kinh hoàng." },
            { name: "Nguy cơ lây nhiễm bệnh nan y", desc: "Sử dụng chung kim tiêm hoặc quan hệ mất kiểm soát dẫn đến lây nhiễm HIV/AIDS, viêm gan B, C." },
            { name: "Sốc thuốc đột tử", desc: "Sử dụng quá liều hoặc dùng phải ma túy pha trộn tạp chất gây ngừng thở, trụy tim và tử vong ngay tại chỗ." }
          ]
        },
        {
          heading: "2. Nỗi đau gia đình & Xã hội",
          items: [
            { name: "Khánh kiệt kinh tế gia đình", desc: "Tiền của tiêu tán, bán sạch tài sản, đẩy cha mẹ, vợ con vào cảnh bần cùng nợ nần." },
            { name: "Bạo lực gia đình", desc: "Người nghiện khi đói thuốc hoặc ngáo đá sẵn sàng đe dọa, cướp đoạt, thậm chí xâm hại tính mạng người thân." },
            { name: "Gia tăng tội phạm xã hội", desc: "Là căn nguyên của hầu hết các vụ trộm cắp, cướp giật, lừa đảo, thanh toán lẫn nhau." }
          ]
        },
        {
          heading: "3. Chế tài Pháp luật Việt Nam cực kỳ nghiêm khắc",
          alert: "Bộ luật Hình sự Việt Nam quy định mức phạt vô cùng nặng nề đối với tội phạm ma túy:",
          items: [
            { name: "Tội tàng trữ, vận chuyển, mua bán trái phép chất ma túy", desc: "Khung hình phạt từ 2 năm đến 20 năm tù, tù chung thân hoặc TỬ HÌNH." },
            { name: "Tội tổ chức, lôi kéo, cưỡng bức người khác sử dụng", desc: "Bị xử phạt từ 7 năm đến tù chung thân. Đặc biệt nếu lôi kéo trẻ em dưới 18 tuổi sẽ chịu tình tiết tăng nặng kịch khung." }
          ]
        }
      ]
    }
  },
  {
    id: "phong-chong",
    number: "03",
    title: "CÁCH PHÒNG, CHỐNG",
    shortDesc: "Bộ kỹ năng từ chối 4 bước vàng, nhận diện cạm bẫy và xây dựng 'lá chắn' bảo vệ bản thân.",
    icon: "shield-check",
    color: "from-emerald-600 to-teal-600",
    badge: "Kỹ năng sống còn",
    content: {
      intro: "Cách tốt nhất để không dính vào ma túy là chủ động trang bị kiến thức, rèn luyện kỹ năng từ chối bản lĩnh và xây dựng lối sống lành mạnh, kiên định.",
      sections: [
        {
          heading: "1. Kỹ năng '4 Bước từ chối vàng' dứt khoát",
          items: [
            { name: "Bước 1: Bình tĩnh & Giữ ánh mắt kiên định", desc: "Không lúng túng, không tỏ ra sợ sệt. Nhìn thẳng vào đối phương để thể hiện sự vững vàng." },
            { name: "Bước 2: Nêu rõ lập trường dứt khoát", desc: "Nói rõ: 'Tôi không dùng chất này. Tôi tôn trọng sức khỏe và tương lai của mình'." },
            { name: "Bước 3: Nói 'KHÔNG' không ngập ngừng", desc: "Tuyệt đối không nói 'để lúc khác', 'để tôi nghĩ đã' vì sẽ bị tiếp tục dụ dỗ, ép buộc." },
            { name: "Bước 4: Nhanh chóng rời khỏi hiện trường", desc: "Tìm cớ có hẹn gấp, đi vệ sinh hoặc di chuyển ra nơi đông người, an toàn và có camera." }
          ]
        },
        {
          heading: "2. Cảnh giác với các 'Cạm bẫy tâm lý'",
          items: [
            { name: "Bẫy 'Thử một lần không nghiện đâu'", desc: "SỰ THẬT: Ma túy tổng hợp thế hệ mới có thể gây nghiện và phá hủy não ngay từ lần nếm thử đầu tiên." },
            { name: "Bẫy 'Dùng mới sành điệu, mới là dân chơi'", desc: "SỰ THẬT: Tự hủy hoại sức khỏe bản thân và vi phạm pháp luật là hành vi dại dột, không hề sành điệu." },
            { name: "Bẫy 'Chất này giúp tỉnh táo học bài / giảm cân'", desc: "SỰ THẬT: Đó là ảo giác kích thích thần kinh giả tạo, nhanh chóng chuyển sang suy kiệt và loạn thần." }
          ]
        },
        {
          heading: "3. Nguyên tắc an toàn nơi công cộng",
          items: [
            { name: "Không nhận đồ uống mở sẵn", desc: "Tại quán bar, karaoke, tiệc tùng: không uống ly nước đã rời khỏi tầm mắt của mình." },
            { name: "Không nhận cầm hộ đồ vật của người lạ", desc: "Rất nhiều trường hợp bị kẻ xấu gài bẫy nhét ma túy vào balo, túi xách để vận chuyển hộ." },
            { name: "Chọn bạn mà chơi", desc: "Tránh xa các nhóm bạn tụ tập đua xe, ăn chơi thâu đêm, có biểu hiện sử dụng chất kích thích." }
          ]
        }
      ]
    }
  },
  {
    id: "xu-ly-nguy-co",
    number: "04",
    title: "XỬ LÝ KHI GẶP NGUY CƠ",
    shortDesc: "Kịch bản thoát hiểm khi bị đe dọa, cách ứng phó với người ngáo đá và gọi cứu viện tức thì.",
    icon: "phone-call",
    color: "from-amber-600 to-orange-600",
    badge: "Ứng phó khẩn cấp",
    content: {
      intro: "Khi rơi vào tình huống nguy hiểm hoặc phát hiện hiểm họa ma túy xung quanh, sự bình tĩnh và các bước xử lý chính xác sẽ bảo vệ mạng sống của bạn.",
      sections: [
        {
          heading: "1. Kịch bản thoát hiểm khi bị ép buộc, dụ dỗ",
          items: [
            { name: "Trì hoãn thời gian", desc: "Giả vờ đau bụng, có cuộc gọi gấp của cha mẹ hoặc thầy cô để thoát ra ngoài tầm khống chế." },
            { name: "Tìm kiếm sự trợ giúp ngay lập tức", desc: "Chạy đến chốt bảo vệ, công an phường, nhân viên quán hoặc người lớn tuổi đáng tin cậy." },
            { name: "Báo ngay cho cơ quan chức năng", desc: "Cung cấp đặc điểm đối tượng, vị trí cho công an để kịp thời triệt phá ổ nhóm tội phạm." }
          ]
        },
        {
          heading: "2. Kỹ năng ứng phó khi gặp người 'Ngáo đá' hung hãn",
          alert: "Người ngáo đá đang ở trạng thái ảo giác hoang tưởng, có thể coi bạn là quái vật hoặc kẻ thù muốn sát hại họ!",
          items: [
            { name: "Giữ khoảng cách an toàn", desc: "Cách xa ít nhất 5-10 mét, luôn quan sát xem đối tượng có cầm hung khí sắc nhọn hay không." },
            { name: "Không nhìn trừng trừng, không tranh cãi", desc: "Không nhìn chằm chằm vào mắt đối tượng, không thách thức, không làm các động tác bất ngờ khiến họ kích động." },
            { name: "Nói giọng nhẹ nhàng, làm dịu", desc: "Nếu bị ép đối thoại, hãy nói chuyện từ tốn, đồng thuận tạm thời để tìm cơ hội rút lui an toàn." },
            { name: "Hô hoán và sơ tán trẻ em, người già", desc: "Báo động cho mọi người xung quanh đóng cửa nhà và gọi ngay Cảnh sát 113." }
          ]
        },
        {
          heading: "3. Danh bạ HOTLINE khẩn cấp 24/7 (Bấm gọi miễn phí)",
          isHotlines: true,
          hotlines: [
            { tel: "113", name: "Cảnh sát phản ứng nhanh", desc: "Báo tin tội phạm, bảo vệ an ninh trật tự, can thiệp bạo lực khẩn cấp." },
            { tel: "111", name: "Tổng đài Quốc gia Bảo vệ Trẻ em", desc: "Tư vấn, bảo vệ trẻ em và học sinh khỏi bị bạo lực, dụ dỗ, xâm hại." },
            { tel: "115", name: "Cấp cứu Y tế", desc: "Xử lý cấp cứu người bị sốc thuốc, ngộ độc chất kích thích nguy kịch." },
            { tel: "1800 5858 88", name: "Đường dây nóng Hỗ trợ Cai nghiện", desc: "Tư vấn cai nghiện, phục hồi chức năng và hỗ trợ tâm lý chuyên sâu." }
          ]
        }
      ]
    }
  },
  {
    id: "video-tuyen-truyen",
    number: "05",
    title: "VIDEO TUYÊN TRUYỀN",
    shortDesc: "Các phóng sự thời sự, phim ngắn cảnh báo tác hại ma túy từ Bộ Công an và Đài Truyền hình Quốc gia.",
    icon: "play-circle",
    color: "from-indigo-600 to-purple-600",
    badge: "Tư liệu trực quan",
    content: {
      intro: "Hình ảnh chân thực và lời cảnh báo từ các chuyên gia, chiến sĩ công an giúp ta nhận thức sâu sắc hơn về hiểm họa ma túy.",
      videos: [
        {
          id: "video-1",
          title: "Hiểm họa ma túy ngụy trang thế hệ mới núp bóng học đường",
          source: "Thời sự VTV / Cục CSĐT tội phạm về ma túy (C04)",
          duration: "10:25",
          embedUrl: "https://www.youtube.com/embed/5aC7FzH-xek",
          summary: "Vạch trần các thủ đoạn tinh vi: ngụy trang ma túy trong bánh kẹo, tinh dầu thuốc lá điện tử, trà sữa và bài học cảnh giác cho học sinh, phụ huynh.",
          badge: "Phóng sự nổi bật"
        },
        {
          id: "video-2",
          title: "Tác hại khôn lường của Ma túy đá và Hội chứng 'Ngáo đá'",
          source: "Truyền hình Công an Nhân dân (ANTV)",
          duration: "15:40",
          embedUrl: "https://www.youtube.com/embed/o0Hq_c1o_w0",
          summary: "Chuyên gia y tế và điều tra viên phân tích sự tàn phá não bộ của ma túy đá, nguyên nhân của các bi kịch gia đình và bài học răn đe.",
          badge: "Cảnh báo cao độ"
        },
        {
          id: "video-3",
          title: "Kỹ năng từ chối và tự bảo vệ trước cám dỗ ma túy",
          source: "Chương trình Kỹ năng sống thanh thiếu niên",
          duration: "08:15",
          embedUrl: "https://www.youtube.com/embed/Y0rQ_9L2Ztw",
          summary: "Hướng dẫn thực hành các tình huống từ chối khi bị rủ rê tại quán karaoke, buổi tiệc sinh nhật và cách xử lý khi phát hiện vật lạ.",
          badge: "Bài học kỹ năng"
        }
      ]
    }
  }
];

// 5 THÔNG ĐIỆP NHỚ
const FIVE_MESSAGES = [
  {
    id: 1,
    text: "Không thử ma túy dù chỉ một lần.",
    desc: "Dù tò mò hay bị thách thức, một lần thử cũng có thể hủy hoại cả cuộc đời bạn.",
    icon: "ban",
    color: "bg-red-50 border-red-200 text-red-700"
  },
  {
    id: 2,
    text: "Không nhận chất không rõ nguồn gốc.",
    desc: "Cảnh giác với kẹo lạ, nước uống mở sẵn, tinh dầu thơm từ người khác mời.",
    icon: "package-x",
    color: "bg-amber-50 border-amber-200 text-amber-700"
  },
  {
    id: 3,
    text: "Không nghe lời dụ dỗ, lôi kéo.",
    desc: "Kiên định nói KHÔNG trước lời rủ rê 'chất này giải sầu, không gây nghiện'.",
    icon: "message-square-off",
    color: "bg-blue-50 border-blue-200 text-blue-700"
  },
  {
    id: 4,
    text: "Chủ động bảo vệ bản thân và gia đình.",
    desc: "Xây dựng lối sống lành mạnh, thể thao tích cực, lan tỏa kiến thức phòng tránh.",
    icon: "shield",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700"
  },
  {
    id: 5,
    text: "Khi phát hiện nguy cơ, hãy tìm kiếm sự giúp đỡ.",
    desc: "Báo ngay cho cha mẹ, thầy cô hoặc gọi đường dây nóng 113, 111 kịp thời.",
    icon: "life-buoy",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700"
  }
];

// 5 CÂU HỎI QUIZ TRẮC NGHIỆM
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Bạn cùng lớp rủ bạn uống thử một loại 'nước vui' với lời quảng cáo: 'Chỉ giúp tỉnh táo học bài, không phải ma túy đâu, thử một ngụm không nghiện được'. Bạn nên xử lý thế nào?",
    options: [
      { text: "A. Uống thử một ngụm nhỏ xem có thực sự tỉnh táo không.", isCorrect: false },
      { text: "B. Kiên quyết từ chối ngay, giải thích đó là ma túy núp bóng và báo với thầy cô hoặc cha mẹ.", isCorrect: true },
      { text: "C. Cầm về nhà cất giấu để hôm nào mệt mỏi thì uống.", isCorrect: false },
      { text: "D. Rủ thêm các bạn khác cùng uống cho vui.", isCorrect: false }
    ],
    explanation: "Đúng! 'Nước vui', 'nước dâu' thực chất là ma túy tổng hợp pha trộn (chứa Ketamine, Ecstasy). Chúng cực kỳ độc hại và có thể gây nghiện, sốc tim ngay lần đầu sử dụng. Cần kiên quyết từ chối và báo ngay cho người lớn."
  },
  {
    id: 2,
    question: "Tác hại nghiêm trọng nhất của việc hút 'Bóng cười' (khí N2O) thường xuyên là gì?",
    options: [
      { text: "A. Chỉ làm mất ngủ nhẹ trong vài ngày rồi tự khỏi.", isCorrect: false },
      { text: "B. Làm trắng răng và tăng khả năng tập trung học tập.", isCorrect: false },
      { text: "C. Tổn thương tủy sống cổ và ngực, gây tê bì, yếu liệt tứ chi và thoái hóa thần kinh vĩnh viễn.", isCorrect: true },
      { text: "D. Giúp tăng cường thể lực khi tập thể thao.", isCorrect: false }
    ],
    explanation: "Chính xác! Khí N2O trong bóng cười ức chế chuyển hóa vitamin B12, gây thoái hóa tủy sống cấp tính, khiến nhiều người trẻ tuổi bị liệt vĩnh viễn không thể đi lại."
  },
  {
    id: 3,
    question: "Khi phát hiện một người có biểu hiện 'ngáo đá' (ảo giác, cầm hung khí, la hét đe dọa), hành động ĐÚNG NHẤT là gì?",
    options: [
      { text: "A. Tiến lại thật gần, nhìn trừng trừng vào mắt và thách thức họ.", isCorrect: false },
      { text: "B. Cùng bạn bè xông vào giằng co hung khí với đối tượng.", isCorrect: false },
      { text: "C. Giữ khoảng cách an toàn (ít nhất 5-10m), hô hoán người xung quanh sơ tán và gọi ngay 113.", isCorrect: true },
      { text: "D. Đứng lại quay clip livestream câu like mà không phòng bị gì.", isCorrect: false }
    ],
    explanation: "Rất chuẩn! Người ngáo đá bị hoang tưởng ảo giác cực độ, dễ tấn công bất ngờ. Phải lập tức giữ khoảng cách an toàn, sơ tán người già/trẻ nhỏ và báo khẩn cấp cho lực lượng Công an 113."
  },
  {
    id: 4,
    question: "Số điện thoại Tổng đài Quốc gia Bảo vệ Trẻ em, sẵn sàng tiếp nhận tư vấn và trợ giúp khi học sinh, trẻ em gặp nguy cơ bị lôi kéo là gì?",
    options: [
      { text: "A. 111", isCorrect: true },
      { text: "B. 112", isCorrect: false },
      { text: "C. 114", isCorrect: false },
      { text: "D. 119", isCorrect: false }
    ],
    explanation: "Chính xác! Tổng đài 111 là đường dây nóng miễn phí hoạt động 24/7 bảo vệ, tư vấn và can thiệp cho trẻ em và học sinh tại Việt Nam."
  },
  {
    id: 5,
    question: "Thông điệp cốt lõi và quan trọng nhất để phòng ngừa ma túy cho mỗi chúng ta là gì?",
    options: [
      { text: "A. Chỉ thử vào các dịp lễ tết hoặc sinh nhật đặc biệt.", isCorrect: false },
      { text: "B. Không thử ma túy dù chỉ một lần - Chủ động bảo vệ bản thân và gia đình.", isCorrect: true },
      { text: "C. Chỉ dùng ma túy loại đắt tiền vì sẽ an toàn hơn.", isCorrect: false },
      { text: "D. Dùng một chút rồi uống nhiều nước lọc sẽ không sao.", isCorrect: false }
    ],
    explanation: "Tuyệt vời! 'Không thử ma túy dù chỉ một lần' là nguyên tắc bất di bất dịch giúp bạn giữ gìn tương lai trong sáng, sức khỏe vững bền và hạnh phúc gia đình."
  }
];

// STATE CỦA ỨNG DỤNG
let appState = {
  currentModalTopic: null,
  quizCurrentIndex: 0,
  quizScore: 0,
  quizUserAnswers: [],
  quizAnswered: false,
  pledges: JSON.parse(localStorage.getItem('anti_drug_pledges') || '[false, false, false, false, false]')
};

// KHỞI TẠO KHI TẢI TRANG
document.addEventListener('DOMContentLoaded', () => {
  renderMainCards();
  renderFiveMessages();
  setupEventListeners();
  updatePledgeSummary();
  initLucideIcons();
});

// Render 5 Thẻ lớn trang chủ
function renderMainCards(filterKeyword = "") {
  const container = document.getElementById('main-cards-container');
  if (!container) return;

  const filtered = TOPICS_DATA.filter(t => {
    if (!filterKeyword) return true;
    const kw = filterKeyword.toLowerCase();
    return t.title.toLowerCase().includes(kw) || 
           t.shortDesc.toLowerCase().includes(kw) ||
           t.content.intro.toLowerCase().includes(kw);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500">
        <i data-lucide="search-x" class="w-12 h-12 mx-auto mb-2 text-slate-400"></i>
        <p class="font-medium">Không tìm thấy nội dung phù hợp với từ khóa "${filterKeyword}".</p>
        <button onclick="clearSearch()" class="mt-3 text-sm text-sky-600 hover:underline">Xóa tìm kiếm</button>
      </div>
    `;
    initLucideIcons();
    return;
  }

  container.innerHTML = filtered.map(topic => `
    <div onclick="openTopicModal('${topic.id}')" 
         class="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 card-hover-effect cursor-pointer flex flex-col justify-between overflow-hidden">
      
      <!-- Top banner accent -->
      <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${topic.color}"></div>

      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-slate-100 text-slate-700">
            ${topic.number} • ${topic.badge}
          </span>
          <div class="w-11 h-11 rounded-xl bg-gradient-to-br ${topic.color} text-white flex items-center justify-center shadow-md shadow-sky-500/10 group-hover:scale-110 transition-transform">
            <i data-lucide="${topic.icon}" class="w-5 h-5"></i>
          </div>
        </div>

        <h3 class="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-2">
          ${topic.title}
        </h3>

        <p class="text-sm text-slate-600 line-clamp-2 leading-relaxed">
          ${topic.shortDesc}
        </p>
      </div>

      <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-600">
        <span class="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Xem chi tiết cẩm nang
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </span>
        <span class="text-slate-400 font-normal">Chạm để mở</span>
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

// Render 5 Thông điệp nhớ
function renderFiveMessages() {
  const container = document.getElementById('five-messages-container');
  if (!container) return;

  container.innerHTML = FIVE_MESSAGES.map((msg, idx) => {
    const isChecked = appState.pledges[idx];
    return `
      <div class="relative bg-white rounded-2xl p-5 border ${isChecked ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-slate-200'} shadow-sm transition-all">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-base ${isChecked ? 'bg-emerald-600 text-white' : 'bg-sky-100 text-sky-700'}">
            ${msg.id}
          </div>
          <div class="flex-1">
            <h4 class="font-bold text-base text-slate-900 mb-1 flex items-center gap-2">
              ${msg.text}
            </h4>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
              ${msg.desc}
            </p>
            <button onclick="togglePledge(${idx})" 
                    class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${isChecked ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}">
              <i data-lucide="${isChecked ? 'check-circle-2' : 'circle'}" class="w-4 h-4 ${isChecked ? 'text-emerald-600' : 'text-slate-400'}"></i>
              ${isChecked ? 'Đã ghi nhớ & cam kết' : 'Tôi cam kết ghi nhớ'}
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initLucideIcons();
}

// Xử lý Cam kết 5 Thông điệp
function togglePledge(index) {
  appState.pledges[index] = !appState.pledges[index];
  localStorage.setItem('anti_drug_pledges', JSON.stringify(appState.pledges));
  renderFiveMessages();
  updatePledgeSummary();

  if (appState.pledges.every(p => p === true)) {
    triggerConfetti();
    showToast("Chúc mừng! Bạn đã hoàn thành cam kết 5 Thông điệp vàng phòng chống ma túy!", "success");
  }
}

function updatePledgeSummary() {
  const count = appState.pledges.filter(Boolean).length;
  const countEl = document.getElementById('pledge-count');
  if (countEl) {
    countEl.innerText = `${count}/5`;
  }
}

// MỞ MODAL XEM CHI TIẾT CHUYÊN MỤC
function openTopicModal(topicId) {
  const topic = TOPICS_DATA.find(t => t.id === topicId);
  if (!topic) return;

  appState.currentModalTopic = topic;
  const modal = document.getElementById('topic-modal');
  const modalTitle = document.getElementById('modal-topic-title');
  const modalNumber = document.getElementById('modal-topic-number');
  const modalContent = document.getElementById('modal-topic-content');
  const modalHeader = document.getElementById('modal-header');

  modalTitle.innerText = topic.title;
  modalNumber.innerText = `${topic.number} • ${topic.badge}`;
  modalHeader.className = `p-6 bg-gradient-to-r ${topic.color} text-white`;

  let html = `
    <div class="p-5 sm:p-6 space-y-6">
      <div class="p-4 bg-sky-50 rounded-xl border border-sky-200 text-sky-900 text-sm leading-relaxed font-medium">
        <i data-lucide="info" class="w-4 h-4 inline mr-1.5 text-sky-600"></i>
        ${topic.content.intro}
      </div>
  `;

  // Render các phần
  if (topic.content.sections) {
    topic.content.sections.forEach(sec => {
      html += `
        <div class="space-y-3">
          <h4 class="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2 h-5 bg-sky-600 rounded-full"></span>
            ${sec.heading}
          </h4>
      `;

      if (sec.alert) {
        html += `
          <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg text-xs sm:text-sm text-red-800 font-medium">
            <i data-lucide="alert-triangle" class="w-4 h-4 inline mr-1 text-red-600"></i>
            ${sec.alert}
          </div>
        `;
      }

      if (sec.items) {
        html += `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">`;
        sec.items.forEach(item => {
          html += `
            <div class="p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors">
              <div class="font-bold text-sm text-slate-800 mb-1 flex items-center gap-1.5">
                <i data-lucide="dot" class="w-5 h-5 text-sky-600 -ml-1"></i>
                ${item.name}
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">${item.desc}</p>
            </div>
          `;
        });
        html += `</div>`;
      }

      // Xử lý Hotlines nếu có
      if (sec.isHotlines && sec.hotlines) {
        html += `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">`;
        sec.hotlines.forEach(h => {
          html += `
            <div class="p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start justify-between">
              <div>
                <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-200 text-amber-900 mb-1">
                  Khẩn cấp
                </span>
                <h5 class="text-base font-black text-amber-950">${h.tel} - ${h.name}</h5>
                <p class="text-xs text-amber-800 mt-1">${h.desc}</p>
              </div>
              <a href="tel:${h.tel.replace(/\s+/g, '')}" 
                 class="ml-3 p-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white rounded-xl shadow-md transition-all flex items-center justify-center flex-shrink-0"
                 title="Bấm gọi ngay">
                <i data-lucide="phone-outgoing" class="w-5 h-5"></i>
              </a>
            </div>
          `;
        });
        html += `</div>`;
      }

      html += `</div>`;
    });
  }

  // Render Videos nếu là mục 5
  if (topic.content.videos) {
    html += `<div class="space-y-4">`;
    topic.content.videos.forEach(v => {
      html += `
        <div class="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden p-4 space-y-3">
          <div class="flex items-center justify-between">
            <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
              ${v.badge} • ${v.duration}
            </span>
            <span class="text-xs font-medium text-slate-500">${v.source}</span>
          </div>
          <h5 class="font-bold text-slate-900 text-base">${v.title}</h5>
          
          <div class="relative w-full rounded-xl overflow-hidden aspect-video bg-black shadow-inner">
            <iframe 
              class="w-full h-full"
              src="${v.embedUrl}" 
              title="${v.title}"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed bg-white p-3 rounded-xl border border-slate-100">
            <strong>Thông điệp giáo dục:</strong> ${v.summary}
          </p>
        </div>
      `;
    });
    html += `</div>`;
  }

  html += `</div>`;
  modalContent.innerHTML = html;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  initLucideIcons();
}

function closeTopicModal() {
  const modal = document.getElementById('topic-modal');
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  
  // Dừng video phát nếu có
  const modalContent = document.getElementById('modal-topic-content');
  if (modalContent) {
    const iframes = modalContent.querySelectorAll('iframe');
    iframes.forEach(f => {
      f.src = f.src;
    });
  }
}

// LOGIC QUIZ TRẮC NGHIỆM
function openQuizModal() {
  appState.quizCurrentIndex = 0;
  appState.quizScore = 0;
  appState.quizUserAnswers = [];
  appState.quizAnswered = false;

  renderQuizStep();

  const modal = document.getElementById('quiz-modal');
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  initLucideIcons();
}

function closeQuizModal() {
  const modal = document.getElementById('quiz-modal');
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function renderQuizStep() {
  const container = document.getElementById('quiz-body');
  if (!container) return;

  // Nếu đã hoàn thành 5 câu
  if (appState.quizCurrentIndex >= QUIZ_QUESTIONS.length) {
    renderQuizResult(container);
    return;
  }

  const q = QUIZ_QUESTIONS[appState.quizCurrentIndex];
  const progressPercent = ((appState.quizCurrentIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Thanh tiến trình -->
      <div>
        <div class="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
          <span>CÂU HỎI ${appState.quizCurrentIndex + 1} / ${QUIZ_QUESTIONS.length}</span>
          <span class="text-sky-600">ĐIỂM: ${appState.quizScore * 20} / 100</span>
        </div>
        <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div class="bg-gradient-to-r from-sky-500 to-emerald-500 h-2.5 rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
        </div>
      </div>

      <!-- Nội dung câu hỏi -->
      <div class="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200">
        <h4 class="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
          ${q.question}
        </h4>
      </div>

      <!-- Danh sách lựa chọn -->
      <div class="space-y-3" id="quiz-options-list">
        ${q.options.map((opt, i) => `
          <button onclick="handleSelectAnswer(${i})" 
                  id="opt-btn-${i}"
                  class="w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.99] transition-all font-medium text-sm text-slate-800 flex items-start gap-3">
            <span class="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              ${String.fromCharCode(65 + i)}
            </span>
            <span class="flex-1">${opt.text.replace(/^[A-D]\.\s*/, '')}</span>
          </button>
        `).join('')}
      </div>

      <!-- Khung giải thích (ẩn cho tới khi trả lời) -->
      <div id="quiz-feedback" class="hidden p-4 rounded-xl border text-sm leading-relaxed"></div>

      <!-- Nút Tiếp tục -->
      <div class="pt-2 flex justify-end">
        <button id="quiz-next-btn" 
                onclick="handleNextQuestion()" 
                class="hidden items-center gap-2 px-6 py-2.5 bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold rounded-xl shadow-md transition-all text-sm">
          <span>Câu kế tiếp</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `;

  initLucideIcons();
}

function handleSelectAnswer(optionIndex) {
  if (appState.quizAnswered) return;
  appState.quizAnswered = true;

  const q = QUIZ_QUESTIONS[appState.quizCurrentIndex];
  const selectedOption = q.options[optionIndex];
  const isCorrect = selectedOption.isCorrect;

  if (isCorrect) {
    appState.quizScore++;
  }

  // Tô màu đáp án
  q.options.forEach((opt, idx) => {
    const btn = document.getElementById(`opt-btn-${idx}`);
    if (!btn) return;
    btn.disabled = true;
    if (opt.isCorrect) {
      btn.className = "w-full text-left p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50 font-bold text-sm text-emerald-900 flex items-start gap-3";
    } else if (idx === optionIndex && !isCorrect) {
      btn.className = "w-full text-left p-4 rounded-xl border-2 border-rose-500 bg-rose-50 font-bold text-sm text-rose-900 flex items-start gap-3";
    } else {
      btn.className = "w-full text-left p-4 rounded-xl border border-slate-200 bg-slate-50 opacity-50 font-normal text-sm text-slate-500 flex items-start gap-3";
    }
  });

  // Hiển thị khung phản hồi
  const feedback = document.getElementById('quiz-feedback');
  if (feedback) {
    feedback.className = `p-4 rounded-xl border text-sm leading-relaxed ${isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'}`;
    feedback.innerHTML = `
      <div class="font-bold flex items-center gap-2 mb-1">
        <i data-lucide="${isCorrect ? 'check-circle' : 'x-circle'}" class="w-5 h-5 ${isCorrect ? 'text-emerald-600' : 'text-rose-600'}"></i>
        ${isCorrect ? 'Tuyệt vời! Bạn đã chọn chính xác.' : 'Chưa chính xác!'}
      </div>
      <p class="text-xs sm:text-sm">${q.explanation}</p>
    `;
    feedback.classList.remove('hidden');
  }

  // Hiển thị nút tiếp tục
  const nextBtn = document.getElementById('quiz-next-btn');
  if (nextBtn) {
    nextBtn.classList.remove('hidden');
    nextBtn.classList.add('inline-flex');
  }

  initLucideIcons();
}

function handleNextQuestion() {
  appState.quizAnswered = false;
  appState.quizCurrentIndex++;
  renderQuizStep();
}

function renderQuizResult(container) {
  const total = QUIZ_QUESTIONS.length;
  const score = appState.quizScore;
  const percent = Math.round((score / total) * 100);

  let badgeTitle = "";
  let badgeColor = "";
  let message = "";

  if (score === 5) {
    badgeTitle = "HIỆP SĨ TUYÊN TRUYỀN XUẤT SẮC";
    badgeColor = "from-emerald-500 to-teal-600";
    message = "Bạn có hiểu biết sâu sắc và kỹ năng phòng vệ ma túy tuyệt vời! Hãy lan tỏa cẩm nang này tới bạn bè và cộng đồng.";
    triggerConfetti();
  } else if (score >= 3) {
    badgeTitle = "TUYÊN TRUYỀN VIÊN TÍCH CỰC";
    badgeColor = "from-sky-500 to-blue-600";
    message = "Bạn đã nắm khá vững các kiến thức cơ bản. Hãy tiếp tục xem kỹ các mục trong cẩm nang để bảo vệ mình và người thân tốt hơn.";
  } else {
    badgeTitle = "HỌC VIÊN CẦN CẢNH GIÁC";
    badgeColor = "from-amber-500 to-orange-600";
    message = "Ma túy rất nguy hiểm và biến tướng khôn lường. Hãy dành chút thời gian đọc lại 5 chuyên mục chính để trang bị kiến thức sống còn nhé!";
  }

  container.innerHTML = `
    <div class="text-center py-6 space-y-6">
      <div class="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${badgeColor} text-white flex items-center justify-center shadow-xl shadow-sky-500/20">
        <i data-lucide="award" class="w-12 h-12"></i>
      </div>

      <div>
        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 mb-2">
          KẾT QUẢ TRẮC NGHIỆM
        </span>
        <h3 class="text-2xl font-black text-slate-900">${badgeTitle}</h3>
        <p class="text-4xl font-black text-sky-600 mt-2">${percent}<span class="text-lg text-slate-400">/100 Điểm</span></p>
        <p class="text-sm text-slate-600 max-w-md mx-auto mt-3 leading-relaxed">
          ${message}
        </p>
      </div>

      <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button onclick="openQuizModal()" 
                class="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 active:scale-95 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2">
          <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
          Làm lại bài Quiz
        </button>
        <button onclick="openShareModal()" 
                class="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2">
          <i data-lucide="share-2" class="w-4 h-4"></i>
          Chia sẻ kết quả
        </button>
      </div>
    </div>
  `;

  initLucideIcons();
}

// MODAL CHIA SẺ & TẠO QR CODE
function openShareModal() {
  const modal = document.getElementById('share-modal');
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');

  // Tạo QR Code
  generateQRCode();
  initLucideIcons();
}

function closeShareModal() {
  const modal = document.getElementById('share-modal');
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function generateQRCode() {
  const qrContainer = document.getElementById('qrcode-canvas-container');
  if (!qrContainer) return;
  qrContainer.innerHTML = '';

  const shareUrl = window.location.href;

  if (typeof QRCode !== 'undefined') {
    new QRCode(qrContainer, {
      text: shareUrl,
      width: 180,
      height: 180,
      colorDark: "#0369a1",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  } else {
    qrContainer.innerHTML = `
      <div class="w-44 h-44 bg-slate-100 rounded-xl flex items-center justify-center text-xs text-slate-500 text-center p-3">
        Mã QR đại diện cho liên kết ứng dụng
      </div>
    `;
  }
}

// Sao chép liên kết
function copyShareLink() {
  const shareUrl = window.location.href;
  navigator.clipboard.writeText(shareUrl).then(() => {
    showToast("Đã sao chép liên kết cẩm nang vào bộ nhớ tạm!", "success");
  }).catch(() => {
    showToast("Không thể tự động sao chép. Vui lòng copy URL trên thanh địa chỉ.", "info");
  });
}

// Chia sẻ bằng Web Share API
function nativeShare() {
  if (navigator.share) {
    navigator.share({
      title: 'CẨM NANG CHUNG TAY PHÒNG, CHỐNG MA TÚY',
      text: 'Chung tay phòng, chống tác hại của ma túy – Vì cuộc sống bình yên, hạnh phúc. Hãy cùng xem cẩm nang!',
      url: window.location.href,
    }).catch((error) => console.log('Chia sẻ bị hủy', error));
  } else {
    copyShareLink();
  }
}

// Tải ảnh QR Code
function downloadQRCode() {
  const qrContainer = document.getElementById('qrcode-canvas-container');
  const img = qrContainer ? qrContainer.querySelector('img') : null;
  const canvas = qrContainer ? qrContainer.querySelector('canvas') : null;

  let url = "";
  if (img && img.src) {
    url = img.src;
  } else if (canvas) {
    url = canvas.toDataURL("image/png");
  }

  if (url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ma-qr-cam-nang-phong-chong-ma-tuy.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("Đang tải ảnh mã QR xuống thiết bị...", "success");
  } else {
    showToast("Vui lòng chụp màn hình mã QR để lưu lại.", "info");
  }
}

// BỘ TÌM KIẾM NHANH
function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const kw = e.target.value.trim();
      renderMainCards(kw);
    });
  }
}

function clearSearch() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.value = '';
  }
  renderMainCards('');
}

// TOAST NOTIFICATION
function showToast(message, type = "info") {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const toastText = document.getElementById('toast-text');
  const toastIcon = document.getElementById('toast-icon');

  if (toastText) toastText.innerText = message;
  
  if (toastIcon) {
    toastIcon.setAttribute('data-lucide', type === 'success' ? 'check-circle-2' : 'info');
  }

  toast.classList.remove('translate-y-24', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  initLucideIcons();

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-24', 'opacity-0');
  }, 3500);
}

// HIỆU ỨNG PHÁO HOA CONFETTI
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// HỖ TRỢ KHỞI TẠO BIỂU TƯỢNG LUCIDE
function initLucideIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}
