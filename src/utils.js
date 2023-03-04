export const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export const navigateToCarPartsPro = (make, model, year, part) => {
  const CAR_PART_PRO_URL = `https://pro-oh.car-part.com/cgi-bin/proSearch.cgi?userPart=${part}&filterOrder2=ASC&limitVin=n&userDate2=Ending+Year&userDate=${year}&filterOrder1=ASC&filterPrice=all&filterAge=&userSearch=int&filterCert=all&filterDelivery=3&userPage=1&userModel=${make}+${model}&userLocation=All+States&filterDamageUnit=&userVIN=&filterPartType=List-2%2C3%2CA%2CQ%2CR&limitVins=n&userZip=L4C0S7&limitGradeA=n&filterSort1=grade&userPreference=grade&userInterchange=None&filterWarranty=all&filterSort2=zip&svZip=y&filterAGrade=n&limitYears=n&limitMiles=n&buyerType=S&request_method=POST`;

  window.open(CAR_PART_PRO_URL, "_blank", "noreferrer");
};

export function areObjectsEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (!obj1 || !obj2 || Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    if (!(key in obj2) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
