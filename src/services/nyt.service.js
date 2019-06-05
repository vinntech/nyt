import config from '../config.json';

const NYTService = {

    url: function (q) {
        function format (fmtstr) {
            var args = Array.prototype.slice.call(arguments, 1);
            return fmtstr.replace(/\{(\d+)\}/g, function (match, index) {
              return args[index];
            });
          }
        const url = config.nytUrl;
        const apiKey = config.nytApiKey;
        const period = 1;
        const query = !q ? "" : q;
        const apiUrl = format(url,period,query, apiKey);
        return  apiUrl;
    },

    getArticles: async function (q) {
        return fetch(NYTService.url(q))
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data.results;
            })
            .catch((err) => console.log(err));
    }

}

export default NYTService;

/* Remote it for coverage report */
