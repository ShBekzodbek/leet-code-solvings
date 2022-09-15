const hammingWeight = (n) => n.toString(2).replaceAll("0", "").length;


console.log(hammingWeight(010010))
