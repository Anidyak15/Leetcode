#include <stdlib.h>

void postorder(struct TreeNode* root, int* result, int* index) {
    if (root == NULL) return;

    postorder(root->left, result, index);   
    postorder(root->right, result, index);  

    result[*index] = root->val;             
    (*index)++;
}

int* postorderTraversal(struct TreeNode* root, int* returnSize) {
    int* result = (int*)malloc(100 * sizeof(int)); 
    *returnSize = 0;

    postorder(root, result, returnSize);

    return result;
}