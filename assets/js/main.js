const social = [
  {
    id: 'phone',
    name: 'Phone Number',
    value: '0374390536',
    icon: './assets/images/call.svg'
  },
  {
    id: 'email',
    name: 'Email',
    value: 'giahung197bg@gmail.com',
    icon: './assets/images/email.svg'
  },
  {
    id: 'fb',
    name: 'Facebook',
    value: 'https://facebook.com/hunghg255',
    icon: './assets/images/facebook.svg'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    value: 'https://www.instagram.com/hellosilver_miu/',
    icon: './assets/images/instagram.svg'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    value: 'https://twitter.com/SilverMiu',
    icon: './assets/images/twitter.svg'
  },
  {
    id: 'linkedin',
    name: 'Linkedin',
    value: 'https://www.linkedin.com/in/hoanggiahung/',
    icon: './assets/images/linkedin.svg'
  },
  {
    id: 'github',
    name: 'Github',
    value: 'https://github.com/hunghg255',
    icon: './assets/images/github.svg'
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const socialListEle = document.querySelector('.socialList');

  const list = social.reduce((acc, item) => {
    let link = item.value;
    if (item.id === 'phone') link = `tel:${item.value}`;
    if (item.id === 'email') link = `mailto:${item.value}`;

    const liStr = `<li><a href="${link}" target="_blank"><img src="${item.icon}" alt="" /><span>${item.name}</span></a></li>`;
    acc += liStr;
    return acc;
  }, '');
  console.log(list);
  socialListEle.innerHTML = list;
});
