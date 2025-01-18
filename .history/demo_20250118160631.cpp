#include<bits/stdc++.h>
using namespace std;
 
int main(){
    int T;
    cin>>T;
    
    while(T--){
        int n;
        cin>>n;
        vector<int> a(n);
        vector<int> b(n);
        
        int cnt = 0, value = 0;
        for(int i=0; i<n; i++){
            cin>>a[i];
            cin>>b[i];
            if(a[i] - b[i] < 0){
                cnt++;
                value = i;
            }
        }
        if(cnt > 1){
            cout<<"No"<<endl;
            continue;
        }
        if(cnt == 0){
            cout<<"Yes"<<endl;
            continue;
        }
        bool ans = true;
        for(int i=0; i<n; i++){
            if(i!=value){
                if(abs(a[value] - b[value]) > a[i] - b[i]){
                    ans = false;
                    break;
                }
            }
        }
        if(ans){
            cout<<"Yes"<<endl;
            continue;
        }
        cout<<"No"<<endl;
        
    }
}