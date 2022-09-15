#include <bits/stc++.h>

using namespace std;

int fizzBuzz(int n) {
        vector<string> tuplam;
        for (int i=0 ; i<=n; i++){
            if(i%3==0 && i%5==0){
                tuplam[i]="FizzBazz";
            }else if(i%3===0){
                tuplam[i]="Fizz";
            }else if (i%5===0) {
                tuplam[i]="Bazz";
            }else if(i!==0){
                tuplam[i]=i;
            }

        }
        return tuplam;


}

int main() {
    vector<string> consteyner;

}

/*
class Solution {
public:
    vector<string> fizzBuzz(int n) {
        for(int i=0; i<=n; i++){

        }
    }
};*/
