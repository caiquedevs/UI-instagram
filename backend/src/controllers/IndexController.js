const puppeteer = require('puppeteer');

module.exports = {
  async index(req, res) {
    try {
      const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
      const page = await browser.newPage();
      await page.goto(`https://www.instagram.com/${req.params.user}/`);

      const imgList = await page.evaluate(() => {
        const nodeList = document.querySelectorAll('article img');

        const figurePerfil = document.querySelector('[data-testid="user-avatar"]');

        const imgArray = [...nodeList];

        const imgList = imgArray.map(({ src }, index) => ({
          id: `post${index}`,
          avatar: figurePerfil.src,
          src,
        }));

        return imgList;
      });

      await browser.close();

      if (imgList.length <= 0) return res.status(404).json({ error: 'Usuário nao possui nenhuma foto' });
      res.status(200).json(imgList);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: 'Houve um erro ao tentar acessar esta página' });
    }
  },
};
