const social = [
  {
    id: 'email',
    name: 'Email',
    value: 'giahung197bg@gmail.com',
    icon: './assets/images/email.svg',
  },
  {
    id: 'linkedin',
    name: 'Linkedin',
    value: 'https://www.linkedin.com/in/hoanggiahung/',
    icon: './assets/images/linkedin.svg',
  },
  {
    id: 'github',
    name: 'Github',
    value: 'https://github.com/hunghg255',
    icon: './assets/images/github.svg',
  },
  {
    id: 'tiktok',
    name: 'Tiktok',
    value: 'https://www.tiktok.com/@onlyfrontend',
    icon: './assets/images/tiktok.svg',
  },
  {
    id: 'fb',
    name: 'Facebook',
    value: 'https://facebook.com/hunghg255',
    icon: './assets/images/facebook.svg',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    value: 'https://www.instagram.com/hello_silver_miu/',
    icon: './assets/images/instagram.svg',
  },
  {
    id: 'skype',
    name: 'Skype',
    value: 'skype:live:giahung197bg?chat',
    icon: './assets/images/skype.svg',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    value: 'https://twitter.com/hunghg255',
    icon: './assets/images/twitter.svg',
  },
  {
    id: 'discord',
    name: 'hunghg255',
    value: '',
    icon: './assets/images/discord.png',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    value: 'https://open.spotify.com/user/1joyq9xxlhgg2ykc992tug433',
    icon: './assets/images/spotify.png',
  },
  {
    id: 'qr',
    name: 'QR code',
    value: '',
    icon: './assets/images/qr-code.png',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const socialListEle = document.querySelector('.socialList');

  const list = social.reduce((acc, item) => {
    let link = item.value;
    if (item.id === 'phone') link = `tel:${item.value}`;
    if (item.id === 'email') link = `mailto:${item.value}`;

    let liStr = `<li><a href="${link}" target="_blank"><img src="${item.icon}" alt="" /><span>${item.name}</span></a></li>`;

    if (!link)
      liStr = `<li id="btnCopy"><span><img src="${item.icon}" alt="" /><span>${item.name}</span></span></li>`;

    if (item.id === 'qr')
      liStr = `<li id="btnQr"><span><img src="${item.icon}" alt="" /><span>${item.name}</span></span></li>`;

    acc += liStr;
    return acc;
  }, '');

  socialListEle.innerHTML = list;

  const btnQrCode = document.querySelector('#btnQr');
  const qrCodeELe = document.querySelector('.qrCode');
  const ignoreClickOnMeElement = document.querySelector('.imgQrCode');

  btnQrCode.addEventListener('click', function () {
    qrCodeELe.classList.toggle('active');
  });

  qrCodeELe.addEventListener('click', function (event) {
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
      qrCodeELe.classList.toggle('active');
    }
  });

  // copy to board
  const btnCopy = document.querySelector('#btnCopy');
  const addToClipboard = async (link) => {
    await navigator.clipboard.writeText(link);
  };
  const copyLink = async (link) => {
    const copied = await addToClipboard(link);
    alert(`Copied: ${link}`);
  };
  btnCopy.addEventListener('click', () => copyLink(btnCopy.textContent));
});
