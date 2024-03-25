import React from "react";
const data = [
  {
    id: "1",
    movieName: "Weather With You",
    description:
      "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi. Cậu từ một hòn đảo xa xôi hẻo lánh đến Tokyo, nhưng sau đó nhanh chóng rơi vào cảnh túng thiếu và phải sống chuỗi ngày cô đơn. Nhưng cuối cùng cậu đã tìm được công việc: viết bài cho một tạp chí huyền bí. Sau khi cậu bắt đầu công việc, mưa cứ rơi mãi rơi mãi không thôi. Ở một góc thành phố đông đúc và nhộn nhịp, Hodaka đã gặp thiếu nữ tên Hina. Cô sống cùng em trai, luôn vui vẻ và kiên cường. Cô cũng có một sức mạnh vô cùng đặc biệt: “Này, từ bây giờ trời hãy hửng nắng đi nào.” Từng chút một, mưa ngừng rơi, và ánh sáng tuyệt đẹp rọi chiếu những nóc nhà trong thành phố. Chỉ bằng một lời cầu nguyện, cô đã khiến bầu trời trở nên sáng trong.",
    image:
      "https://s3-alpha-sig.figma.com/img/a159/88d8/3feb9d7a97a93cac67eb291272ab227e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oSO9aVGdokUApP3HILL7NUCM1OuBmtNEY6qsDrn5TbgD2PQS7jtfzxOK5FT04-O1ai-SvX~IjTczBFCxlaYIQRjqdhEjTa-GtB6ga8hEz4SmFMr8GX335qPgTnhU5TjtFYAUvbUWyljxjdMQDlR5Ydk83DqBd4DIOv6W0FymC5Og9ZFoQQG7oetTWsVOxuVQ2HmM94MFlmdxqASFqYDCppPgcJfBQWsK4l4C3BmlytQglKJTfvpgc4CtZEGNjwGpHDslaCbT1PSsU0sASWk8unHHEuJhwXInjv1Emg99JTuSche~3zxGrNmS-QHcgc5F1EK8N~jjrfql4D53Bei6Hw__",
    episode: "01",
  },

  {
    id: "2",
    movieName: "Once Peace",
    description:
      "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
    image:
      "https://s3-alpha-sig.figma.com/img/6ea2/8ccf/1ea53edb90b65e5d33d48205a91a17a0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qAkBGSBy2lvPH6HP~6kB9VLkEfkfYMM0DEcKusrDgpBNiU~7Pz1Ss39JfaqQWCGQEDrZP8jqiCmEblI8qPlSuqRGDx4GARdkk2gFGSQy9xexgZbdSAiNGMVGDzKcGGWPGQRgNQ5u1iQiOX9u~VUc4CkqgHNhuw~h20QM~j1D9akU8kkRfNCjRmIHpDavmb0Xfd7IPs4~9d4ynS~hwzANBPwXprjk5faqGI0pcdpmOzcaHReoOg~d8JWJ~qW4T0jn32uxJxIjMkhBz7D2nJK~H6CBIzbeuq-1KBscu2IBoDoS7MQ6ULH1t5O3MZjD6foGuez4KmhncUIX0KOc0ReDUw__",
    episode: "1018",
  },
  {
    id: "3",
    movieName: "Boruto: Naruto Next Generations",
    description:
      "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki – “con” của Orochimaru.",
    image:
      "https://s3-alpha-sig.figma.com/img/14e9/6cd4/177b17eb1ee85d84d09efcc0fa3e1b69?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ee3sqTdlXO0rsKJ17ZbsqQSFdrBlNbRcdyQYJEGKA4ytPT0VVv4xNfCdyEwN5lrMLLgStprX--pMpV4JzhnhfQ0SVXSYRsKSmoTqUWxMUuYwJt~zvIpfEVy1ptQvvRt79dVqgnjMDHN-rREveU0dYMe4Y6oBN6xFILok68x8aRxDcQlTNe2zpvGka2KehHXOTe4D0BdT-NQaQvDObNVAnqyo~UaH3nClB8hjJTde-xE7svrjc5h~55o7Cu6R6QfiNLDJww-e3GlvzEZOR9w-Jte0U7UM6FPS8OPBxfGq3cZlhnd~-j9ODX9HFz9kIMQTGg4lLlalOCICTMH9dJ5LYA__",
    episode: "250",
  },
  {
    id: "4",
    movieName: "Spy X Family",
    description:
      "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới",
    image:
      "https://s3-alpha-sig.figma.com/img/894b/a9f6/56cb8d734f17921555e3af4d5fbfd914?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZaePGMl-fTVchuqdiO5BxI1GONk-Lz~yfjGKqVNePQbagUfoKn3CsouInUn3eqB2I1b2DYI5g~zpir6Oz9tKMX28kqsJn0xKMC6Q5DyaQl3hun5xsbQ~JfVvrhKxvSpZpnYqywg-siGMvXts2Iml8BzUAm4YXKQMAeShaOGTggBRT6KjVwohKrpJ0~q0YFhEKXdVsYKnZHJtPc26PdzP1STvA2GUNtDAz2tBkfCCY48Wbkr3iJN7CBcwOfTGymcU7lAuFqJgm9ShCWXrMWEHCG0x3LvrkKygMowyVqwxwMWrjrYSRduaJzr-XVdceQ~O8GtLRUoQK~hxRAUIau7h~Q__",
    episode: "07",
  },
  {
    id: "5",
    movieName: "Shingeki no kyojin",
    description:
      "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
    image:
      "https://s3-alpha-sig.figma.com/img/f045/43fa/554deceb9b7c888745b5f43729a208d3?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SXmQTDQuNuc8khL5wL39TOlr8PkA0xFnt2jZmSk0BPmwr4snbiL5h4Y6ktmq3in1svcBl2leYuDsRBm4-D2RJrW4WW5Fj7p7we11OlvPJl3gf5g2BGUVXEoZ7BT6QEgJSaxL89Z4EPaoCqhOlkstEIU4zA719gnx5KCkkEnl5RbYZHdDJWFXYPorvlQLpT2pXmPt7W5SNOZav42cUR5AYZUXDoOhU-2xmPxcG-dn5AyKCSYOdTpFEar~sDZpteXbVbuSiOFZN-VPtiwrX1ULuDcYbuwMVWh1D~Mne3a1K-I-1G466ksH2awaUDtTr7UwnzZU~GEE-x~bPKAGzHUycQ__",
    episode: "28",
  },
  {
    id: "6",
    movieName: "Captain Tsubasa",
    description:
      "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của 'Tsubasa Giấc mơ sân cỏ', với những chi tiết được thêm hoặc bỏ, để cộng thêm nét đặc trưng vào bộ truyện. Bộ phim này đã làm vợi lên kí ức về tuổi thơ của biết bao người.",
    image:
      "https://s3-alpha-sig.figma.com/img/e5ab/b83d/eb0371790de015fd2dc503be277bd97b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bu9j2iASZlTPq7c6ZhotD6MiPtpL2DIO65lZV~AjQHxttucre3ZsiYktQDudBGuhXzo-dpNeEI8lhAcVIkBNo-sCed8pIwDoEF36gMlyExMHAL9EEpkX73uyIzGDgu6A2esrZe6-eE-a4UXba7uKYoR2qesSKJBLjHRwQkESBz07dm26BGGyZpmSBwfd5PGEkEgnYMbIRt1k1a3FEZXtQZFwoAzBCNhx58MkYj6dBVfc0AeRhum80~bIq3KDpbKbsekAm56O0mZyDQldD7eyqp3ws6S9u5kD8Xc7rFa6el29ND95kKz9yB1OLkToTDeOMk538S7mxDFUZ5416PhuJA__",
    episode: "28",
  },
  {
    id: "7",
    movieName: "Ao Ashi",
    description:
      "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng đến từ một thị trấn vùng nông thôn ở Nhật Bản. Hy vọng vào được một trường trung học với một câu lạc bộ bóng đá giỏi đã tan thành mây khói khi anh gây ra một sự cố trong một trận đấu quan trọng cho đội của mình, dẫn đến việc họ bị loại khỏi giải đấu. Tuy nhiên, anh đã lọt vào mắt xanh của một người quan trọng tình cờ đến thăm từ Tokyo. Mọi chuyện sẽ diễn ra như thế nào đối với Ashito?",
    image:
      "https://s3-alpha-sig.figma.com/img/2fb6/7ff5/5e3abe50a16b45c46b38b61de4c3c1b2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPvBmZZydMog5yanfkva9D0EwhCcVaVrH0ZS~gT~Wwlt06L5hBTXj0ASWO6OZ5Vyh2jviIkSSDrQxxgygcASrRq1j2-KxJ-C~K~2wAXUsCF6Z9BSJ9-rXZyrK97hbCi4leg9FfJ7HfTAHGpXYOZz2bSfjQvju8iVi3xhMI21pMPhRagNrqeECFBeRRwEMvnbf4CifmRSl8TEQvb2L8kToQC89ubbfthOOVWl3YXvpBAwmdKudHelx2XTcvs7vNftAOGz3BSbI5feQi4wIbsVa9aSlMgEw2gc2jXcs5G5H-lcBkZwYI4uZT-kOcaVmRz0yiuMEGnNjVDtKTmFkcngIw__",
    episode: "28",
  },
];

export default data;
