const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, number2) => {
    const { language } = number2;

    if (total[language]) {
      total[language] = total[language] + 1;
    } else {
      total[language] = 1;
    }
    return total;
  }, {});
  console.log(newData);
};

fetchRepos();
