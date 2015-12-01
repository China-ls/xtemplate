const XTemplate = require('../../../');
const expect = require('expect.js');

describe('support when data is null', function () {
  describe('when non-strict mod', function () {
    it('should render empty when property of data is null', function () {
      const tpl = '{{x.y}}';
      const render = new XTemplate(tpl).render({
        x: null,
      });

      expect(render).to.equal('');
    });

    it('should render empty when sub property of data is null', function () {
      const tpl = '{{x.y.z}}';
      const render = new XTemplate(tpl).render({
        x: {y: null},
      });

      expect(render).to.equal('');
    });

    it('should render empty when property of affix is null', function () {
      const tpl = '{{set(x=null)}}{{x.y}}';
      const render = new XTemplate(tpl).render({});

      expect(render).to.equal('');
    });

    it('should render empty when sub property of affix is null', function () {
      const tpl = '{{set(x={y:null})}}{{x.y.z}}';
      const render = new XTemplate(tpl).render({});

      expect(render).to.equal('');
    });
  });

  describe('when strict mod', function () {
    it('should render throw when property of data is null', function () {
      expect(function () {
        const tpl = '{{x.y}}';
        new XTemplate(tpl, {strict: true}).render({
          x: null,
        });
      }).to.throwError();
    });

    it('should render throw when sub property of data is null', function () {
      expect(function () {
        const tpl = '{{x.y.z}}';
        new XTemplate(tpl, {strict: true}).render({
          x: {y: null},
        });
      }).to.throwError();
    });

    it('should render throw when property of affix is null', function () {
      expect(function () {
        const tpl = '{{set(x=null)}}{{x.y}}';
        new XTemplate(tpl, {strict: true}).render();
      }).to.throwError();
    });

    it('should render throw when sub property of affix is null', function () {
      expect(function () {
        const tpl = '{{set(x={y:null})}}{{x.y.z}}';
        new XTemplate(tpl, {strict: true}).render();
      }).to.throwError();
    });
  });
});
