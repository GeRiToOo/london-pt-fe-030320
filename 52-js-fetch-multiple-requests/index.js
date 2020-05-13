const resultEl = document.querySelector(".result");
const searchEl = document.querySelector("input");
const houseURL = "https://anapioficeandfire.com/api/houses/378";

// STORE YOUR SWORN MEMBERS IN {members}
let members = [];
// =============================

/**
 *
 * REQUIREMENTS:
 *
 * 1. I should be able to see all {swornMembers}
 * after the page has loaded.
 * 2. When I type a query inside the input it should only
 * display members whose name includes the query
 */

const fetchData = async (url) => {
  return await fetch(url).then((response) => response.json());
};

const fetchMembers = async () => {
  const objectMembers = await fetchData(houseURL);
  const mappedMember = objectMembers.swornMembers.map(
    async (memberUrl) => await fetchData(memberUrl)
  );
  members = await Promise.all(mappedMember);
  return members;
};

const renderMembers = (promiseMembers) => {
  promiseMembers.forEach((member) => {
    let check = /\d+/g;
    let born = member.born.match(check);
    born = parseInt(born);

    let died = member.died.match(check);
    died = parseInt(died);

    let li = `<li>
    <p class="name">${member.name || ``}</p>
    <p class="life">${born || `N/A`} -  ${died || `N/A`}</p>
    <p class="gender"><strong>Gender: </strong>${member.gender || ``}</p>
    <p class="culture"><strong>Culture: </strong>${member.culture || ``} </p>
</li>`;
    resultEl.innerHTML += li;
  });
};

const listingMembers = async () => {
  members = await fetchMembers();
  renderMembers(members);
};

searchEl.addEventListener("keyup", async (e) => {
  members = await fetchMembers();

  const filterMembers = members.filter((word) =>
    word.name.toUpperCase().match(searchEl.value.toUpperCase())
  );
  resultEl.innerHTML = " ";
  renderMembers(filterMembers);
});

listingMembers();
/**
 * HTML for each member:
 * <li>
 *     <p class="name">Bilbo Baggins</p>
 *     <p class="life">1777 – 1888</p>
 *     <p class="gender"><strong>Gender: </strong>Male</p>
 *     <p class="culture"><strong>Culture: </strong>Hobbit</p>
 * </li>
 */
