
          /\      |‾‾| /‾‾/   /‾‾/   
     /\  /  \     |  |/  /   /  /    
    /  \/    \    |     (   /   ‾‾\  
   /          \   |  |\  \ |  (‾)  | 
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: get_profile.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 10m30s max duration (incl. graceful stop):
           * default: 1000 iterations shared among 100 VUs (maxDuration: 10m0s, gracefulStop: 30s)


running (00m01.0s), 100/100 VUs, 104 complete and 0 interrupted iterations
default   [  10% ] 100 VUs  00m01.0s/10m0s  0104/1000 shared iters

running (00m02.0s), 100/100 VUs, 304 complete and 0 interrupted iterations
default   [  30% ] 100 VUs  00m02.0s/10m0s  0304/1000 shared iters

running (00m03.0s), 100/100 VUs, 504 complete and 0 interrupted iterations
default   [  50% ] 100 VUs  00m03.0s/10m0s  0504/1000 shared iters

running (00m04.0s), 100/100 VUs, 704 complete and 0 interrupted iterations
default   [  70% ] 100 VUs  00m04.0s/10m0s  0704/1000 shared iters

running (00m05.0s), 096/100 VUs, 904 complete and 0 interrupted iterations
default   [  90% ] 100 VUs  00m05.0s/10m0s  0904/1000 shared iters

running (00m05.2s), 000/100 VUs, 1000 complete and 0 interrupted iterations
default ✓ [ 100% ] 100 VUs  00m05.2s/10m0s  1000/1000 shared iters

     data_received..................: 1.3 MB 245 kB/s
     data_sent......................: 487 kB 94 kB/s
     http_req_blocked...............: min=0.00ms   avg=0.31ms   med=0.00ms   p(99)=5.03ms   p(99.9)=13.00ms  max=13.98ms  count=1000
     http_req_connecting............: min=0.00ms   avg=0.21ms   med=0.00ms   p(99)=3.01ms   p(99.9)=4.01ms   max=8.01ms   count=1000
     http_req_duration..............: min=344.66ms avg=506.57ms med=496.26ms p(99)=768.36ms p(99.9)=774.70ms max=775.21ms count=1000
       { expected_response:true }...: min=344.66ms avg=506.57ms med=496.26ms p(99)=768.36ms p(99.9)=774.70ms max=775.21ms count=1000
     http_req_failed................: 0.00%  ✓ 0          ✗ 1000 
     http_req_receiving.............: min=0.00ms   avg=0.10ms   med=0.00ms   p(99)=1.02ms   p(99.9)=1.11ms   max=1.20ms   count=1000
     http_req_sending...............: min=0.00ms   avg=0.12ms   med=0.00ms   p(99)=3.01ms   p(99.9)=11.67ms  max=11.99ms  count=1000
     http_req_tls_handshaking.......: min=0.00ms   avg=0.00ms   med=0.00ms   p(99)=0.00ms   p(99.9)=0.00ms   max=0.00ms   count=1000
     http_req_waiting...............: min=344.34ms avg=506.36ms med=496.17ms p(99)=768.08ms p(99.9)=774.50ms max=775.21ms count=1000
     http_reqs......................: 1000   193.488942/s
     iteration_duration.............: min=347.24ms avg=507.31ms med=496.62ms p(99)=771.91ms p(99.9)=787.11ms max=787.98ms count=1000
     iterations.....................: 1000   193.488942/s
     vus............................: 96     min=96       max=100
     vus_max........................: 100    min=100      max=100

