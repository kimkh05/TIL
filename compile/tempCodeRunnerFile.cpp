#include<stdio.h>

#define MAX 1001

int graph[MAX][MAX] = {0, }, visited[MAX] = {0, }, q[MAX];

void Dfs(int v, int n){
    visited[v] = 1;
    printf("%d ", v);
    for(int i = 0; i < n; i++) if(graph[v][i + 1] && !visited[i + 1]) Dfs(i + 1, n);
}

void init(int n){ for(int i = 0; i < n; i++) visited[i + 1] = 0; }

void Bfs(int v, int n){
    int front = 0, rear = 1, pop;
    visited[v] = 1;
    printf("%d ", v);
    q[0] = v;
    while(front < rear){
        pop = q[front++];
        for(int i = 0; i < n; i++){
            if(graph[pop][i + 1] && !visited[i + 1]) {
                visited[i + 1] = 1;
                printf("%d ", i + 1);
                q[rear++] = 1;
            }
        }
    }
}

int main(){
    int n, m, v, x, y;
    scanf("%d %d %d", &n, &m, &v);
    for(int i = 0; i < m; i++){
        scanf("%d %d", &x, &y);
        graph[x][y] = graph[y][x] = 1;
    }
    visited[v] = 1;
    Dfs(v, n);
    printf("\n");
    init(n);
    visited[v] = 1;
    Bfs(v, n);
    return 0;
}