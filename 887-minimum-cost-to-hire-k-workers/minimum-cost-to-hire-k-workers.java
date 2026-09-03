import java.util.*;

class Solution {
    public double mincostToHireWorkers(int[] quality, int[] wage, int k) {
        int n = quality.length;

        double[][] workers = new double[n][2];

        for (int i = 0; i < n; i++) {
            workers[i][0] = (double) wage[i] / quality[i]; // wage/quality
            workers[i][1] = quality[i];
        }


        Arrays.sort(workers, (a, b) -> Double.compare(a[0], b[0]));


        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

        int qualitySum = 0;
        double answer = Double.MAX_VALUE;

        for (double[] worker : workers) {
            double ratio = worker[0];
            int q = (int) worker[1];

            maxHeap.add(q);
            qualitySum += q;

 
            if (maxHeap.size() > k) {
                qualitySum -= maxHeap.poll();
            }

            if (maxHeap.size() == k) {
                double cost = ratio * qualitySum;
                answer = Math.min(answer, cost);
            }
        }

        return answer;
    }
}